import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.scss']
})

export class SearchExampleComponent {
  type = new FormControl("", { nonNullable: true });
  songs: Song[] = [
    {
      title: "Blame the Machines",
      artist: "Duran Duran",
      type: SongType.Broken,
    },
    {
      title: "Solid State Survivor",
      artist: "Yellow Magic Orchestra",
      type: SongType.Broken,
    },
    {
      title: "Mr. Roboto",
      artist: "Styx",
      type: SongType.Vocal,
    },
    {
      artist: "Linkin Park",
      title: "High Voltage",
      type: SongType.Broken,
    },
    {
      title: "New Invention",
      artist: "I DONT KNOW HOW THEY FOUND ME",
      type: SongType.Broken,
    },
    {
      title: "Digital Witness",
      artist: "St. Vincent",
      type: SongType.Broken,
    },
    {
      title: "Super Electric",
      artist: "Bomfunk MC's",
      type: SongType.Broken,
    },
    {
      title: "Malfunktion",
      artist: "Breakbot",
      type: SongType.Instrumental,
    },
    {
      title: "Algorythm",
      artist: "Childish Gambino",
      type: SongType.Vocal,
    },
    {
      title: "Boids",
      artist: "Simian Mobile Disco",
      type: SongType.Instrumental,
    },
    {
      title: "Nanobots",
      artist: "They Might Be Giants",
      type: SongType.Vocal,
    },
    {
      title: "Digital Love",
      artist: "Daft Punk",
      type: SongType.Broken,
    },
    {
      title: "Malware Injection",
      artist: "Rémi Gallego",
      type: SongType.Instrumental,
    },
    {
      artist: "Diyù + Lena",
      title: "Computer Technology",
      type: SongType.Instrumental,
    },
    {
      artist: "Adeline Adrenaline",
      title: "square roots",
      type: SongType.Instrumental,
    },
    {
      artist: "Devo",
      title: "Blockhead",
      type: SongType.Vocal,
    },
  ];

  ngOnInit() {
    this.songs.sort(() => Math.random() - 0.5);
  }

  getCurrentSongs(): Song[] {
    if (this.type.value === "vocal") {
      return this.songs.filter(
        song => (
          song.type === SongType.Broken || song.type === SongType.Vocal
        )
      );
    }
    return this.songs.filter(song => !(song.type === SongType.Broken));
  }

}

interface Song {
  title: string,
  artist: string,
  type: SongType,
}

export enum SongType {
  Instrumental = "instrumental",
  Vocal = "vocal",
  Broken = "broken",
}

