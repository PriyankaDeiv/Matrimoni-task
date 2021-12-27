import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface profile {
  id: number,
  name: string,
  age: number,
  height: { ft: number, in: number },
  language: string,
  community: string,
  qualification: string,
  occupation: string,
  city: string,
  state: string,
  contry: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profileData(id?: number): Observable<profile[]> {
    let data = [{
      id: 123,
      name: 'Abinaya',
      age: 27,
      height: { ft: 5, in: 3 },
      language: 'Tamil',
      community: 'Nair',
      qualification: 'MBBS',
      occupation: 'Doctor',
      city: 'Chennai',
      state: 'Tamil Nadu',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.5df00300bd9ba8e9ea46b71a447bdd59?rik=hKa9tRqNRQjo6g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-zkjX6tEysTc%2fUg7wxEDiSJI%2fAAAAAAAAEyk%2flOMVG23wNSU%2fs1600%2fnayanthara-latest-photos-17.jpg&ehk=dyJJFtJZ7HuQ8Tj74CbDM2roxhrj0WWE50vF9qHvSoc%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 456,
      name: 'Aarthi',
      age: 28,
      height: { ft: 5, in: 3 },
      language: 'Telugu',
      community: 'Nair',
      qualification: 'BCA',
      occupation: 'Software Developer',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.cedf2d7e801e673901ad77cbe8bbb09c?rik=m3Tfxvnv%2fSr5Rw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-IwWwGWjFYFM%2fUOkE8zKxz7I%2fAAAAAAABR6Y%2f8Sby2s61QIA%2fs1600%2fdevayani_latest_photos_007.jpg&ehk=LoyCuqueupNkQSryl%2frwnO5cKpZrE%2ffkMPtU7LX8LBw%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 789,
      name: 'Banu',
      age: 23,
      height: { ft: 5, in: 6 },
      language: 'Kannada',
      community: 'Nair',
      qualification: 'B.com',
      occupation: 'Accountant',
      city: 'Mangallur',
      state: 'Bangalore',
      contry: 'India',
      img: 'https://cineinfotv.com/wp-content/uploads/2019/07/IMG_1867.jpg'
    },
    {
      id: 101,
      name: 'Bhuvana',
      age: 22,
      height: { ft: 5, in: 7 },
      language: 'Malayalam',
      community: 'Nair',
      qualification: 'BBA',
      occupation: 'Trainer',
      city: 'Kochin',
      state: 'Kerala',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.9ee5453daf0812c709f4021c7da3ea07?rik=imX9TxAcAxexWA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GAAhBHe240o%2fUuQGzavtsjI%2fAAAAAAAAABc%2fjrhvXBvfc8g%2fs1600%2fHarshu%2b9%2bsmall.jpg&ehk=qjKGv0B2MiNsk0D4torgilgYVia1WDa9FmTVF4RdY40%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 102,
      name: 'Chinmai',
      age: 23,
      height: { ft: 5, in: 7 },
      language: 'Tamil',
      community: 'Nair',
      qualification: 'BCA',
      occupation: 'Trainer',
      city: 'Selam',
      state: 'Tamil Nadu',
      contry: 'India',
      img: 'https://i.pinimg.com/736x/87/b0/d0/87b0d02150f3bfdd45df7c78696f860e.jpg'
    },
    {
      id: 103,
      name: 'Deepika',
      age: 28,
      height: { ft: 5, in: 3 },
      language: 'Telugu',
      community: 'Nair',
      qualification: 'BCA',
      occupation: 'Software Developer',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.37e7a2901ef4ee0ea44b4c236960e216?rik=5nAe5GBtfWCJSg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yAFkrBwTwpI%2fUxsimTMqaFI%2fAAAAAAAADK0%2fM1YDJfsD80s%2fs1600%2fBhama.jpg&ehk=u21qWNSeBBqn%2buPQteakgYt48szb1Q78ORT%2bPZe5Ayg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 104,
      name: 'Dhivya',
      age: 25,
      height: { ft: 6, in: 6 },
      language: 'Kannada',
      community: 'Nair',
      qualification: 'B.com',
      occupation: 'Accountant',
      city: 'Mangallur',
      state: 'Bangalore',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.1e104ddfad15245dc203800e9a7d7be2?rik=zivJ8GTTpDJkkQ&riu=http%3a%2f%2fwww.movieraja.in%2fwp-content%2fuploads%2f2016%2f10%2factress-sri-divya-wiki-movies-photos.jpg&ehk=TiZRhgOds%2bhGu1BodDewGnYq06%2bllZ1PBCQV5PKQgY4%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 105,
      name: 'Elakiya',
      age: 22,
      height: { ft: 5, in: 7 },
      language: 'Malayalam',
      community: 'Nair',
      qualification: 'BBA',
      occupation: 'Trainer',
      city: 'Kochin',
      state: 'Kerala',
      contry: 'India',
      img: 'https://images.cinejolly.com/wp-content/uploads/2016/12/Best-Hot-Pictures-Of-Tamil-Film-Actress-Sandhya-1.jpg'
    },
    {
      id: 106,
      name: 'Gowthami',
      age: 23,
      height: { ft: 5, in: 7 },
      language: 'Tamil',
      community: 'Nair',
      qualification: 'BCA',
      occupation: 'Trainer',
      city: 'Selam',
      state: 'Tamil Nadu',
      contry: 'India',
      img: 'https://th.bing.com/th/id/R.c2636ef409d5e4d5afe608fdc4b88f3a?rik=0rZBdMA98amZWg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8dR4Fa2nK7U%2fUTuaPbb8aRI%2fAAAAAAAATXg%2fQodn6tOTEOA%2fs1600%2fsindhu_menon_sexy_stills%2b(2).jpg&ehk=gvHRxYtDaIWqoD%2bZgdXX3I27i7dNb3NG0e9v7I93z74%3d&risl=&pid=ImgRaw&r=0'
    }];
    data = id ? data.filter((obj: profile) => obj.id == id) : data;
    return of(data);
  }
}
