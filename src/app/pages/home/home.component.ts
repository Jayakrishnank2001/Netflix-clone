import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService){ }

  bannerResult:any=[]
  trendingMovieResult:any=[]
  actionMovieResult:any=[]
  adventureMovieResult:any=[]
  animationMovieResult:any=[]
  comedyMovieResult:any=[]
  documentaryMovieResult:any=[]
  sciencefictionMovieResult:any=[]
  thrillerMovieResult:any=[]

  ngOnInit():void{
    this.bannerData()
    this.trendingData()
    this.actionMovie()
    this.adventureMovie()
    this.animationMovie()
    this.comedyMovie()
    this.documentaryMovie()
    this.sciencefictionMovie()
    this.thrillerMovie()
  }

  //bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#')
      this.bannerResult=result.results;
    })
  }

  //trendingMovieData
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#')
      this.trendingMovieResult=result.results;
    })
  }

  //actionMovie
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      this.actionMovieResult=result.results;
    })
  }

  //adventureMovie
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      this.adventureMovieResult=result.results;
    })
  }

  //animationMovie
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      this.animationMovieResult=result.results;
    })
  }

  //comedyMovie
  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      this.comedyMovieResult=result.results;
    })
  }

  //documentaryMovie
  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      this.documentaryMovieResult=result.results;
    })
  }

  //sciencefictionMovie
  sciencefictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      this.sciencefictionMovieResult=result.results;
    })
  }

  //thrillerMovie
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      this.thrillerMovieResult=result.results;
    })
  }


}
