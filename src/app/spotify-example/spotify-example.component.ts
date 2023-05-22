import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spotify-example',
  templateUrl: './spotify-example.component.html',
  styleUrls: ['./spotify-example.component.scss']
})
export class SpotifyExampleComponent implements OnInit {
  allSongs: Song[] = [
    {
      artist: "Rick Astley",
      name: "Never Gonna Give You Up",
      broken: true,
    },
    {
      artist: "Earth, Wind & Fire",
      name: "September",
      broken: false,
    },
    {
      artist: "My Chemical Romance",
      name: "Welcome To The Black Parade",
      broken: false,
    }
  ];
  showBroken: boolean = false;
  songs: Song[] = this.allSongs.filter(song => (!song.broken));

  spotifyForm: FormGroup<SpotifyForm>;

  constructor(private fb: FormBuilder) {
    this.spotifyForm = this.fb.group<SpotifyForm>({
      songsPerPage: new FormControl("5", {nonNullable: true}),
    });
  }

  ngOnInit(): void {
    this.spotifyForm.valueChanges.subscribe(form => {
      console.log(form);
      this.updateDisplay(form.songsPerPage ?? "5");
    });
    this.songs = this.allSongs.filter(song => (!song.broken));
  }

  updateDisplay(songsPerPage: string): void {
    console.log("songs per page: " + songsPerPage);
    if (songsPerPage === "5" || songsPerPage === "") {
      console.log("not showing all songs");
      this.songs = this.allSongs.filter(song => (!song.broken));
    } else {
      console.log("showing all songs");
      this.songs = this.allSongs;
    }
  }

}

interface Song {
  artist: string,
  name: string,
  broken: boolean,
}

interface SpotifyForm {
  songsPerPage: FormControl<"5"|"10">,
}