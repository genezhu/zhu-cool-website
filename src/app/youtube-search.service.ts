import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Video } from './video';
import { Thumbnail } from './thumbnail';

@Injectable()
export class YoutubeSearchService {

  private readonly searchUrl: string;

  private readonly videosUrl: string;

  private videoList: Video[]

  constructor(private http: HttpClient) {
    const KEY: string = "AIzaSyCtH5niJorIQBTAjZM912zIwCd3_zskyww";

    let date = new Date();
    date.setFullYear(date.getFullYear() - 5);

    let searchRequest = {
      key: KEY,
      part: "snippet",
      fields: "items(id/videoId)",
      type: "video",
      videoEmbeddable: "true",
      regionCode: "US",
      relevanceLanguage: "zh-hans",
      videoDefinition: "high",
      videoDuration: "long",
      publishedAfter: date.toISOString().split('.')[0] + 'Z',
      order: "date",
      maxResults: 20
    };

    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?'
      + Object.keys(searchRequest).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(searchRequest[k])}`).join('&');

    let videosRequest = {
      key: KEY,
      part: "snippet,contentDetails",
      fields: "items(id, snippet(publishedAt, channelId, channelTitle, title, thumbnails/medium), contentDetails/duration)"
    };

    this.videosUrl = 'https://www.googleapis.com/youtube/v3/videos?'
      + Object.keys(videosRequest).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(videosRequest[k])}`).join('&');
  }

  getvideoList(): Video[] {
    return this.videoList;
  }

  search(term: string): Observable<Video[]> {
    return this.http.get(`${this.searchUrl}&q=${encodeURIComponent(term)}`)
      .map(data => data['items'].map(item => item.id.videoId).join(','))
      .flatMap(id =>
        this.http.get(`${this.videosUrl}&id=${encodeURIComponent(id)}`)
          .map(data => {
            this.videoList = data['items'].map(
              item => {
                let snippet = item.snippet;
                return {
                  id: item.id,
                  publishedAt: snippet.publishedAt,
                  channelId: snippet.channelId,
                  channelTitle: snippet.channelTitle,                  
                  title: snippet.title,
                  thumbnail: snippet.thumbnails["medium"],
                  duration: item.contentDetails.duration
                };
              });
            return this.videoList;
          })
      );
  }
}
