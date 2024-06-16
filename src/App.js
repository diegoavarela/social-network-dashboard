
import './App.css';
import Header from './components/header';
import CardHighlight from './components/card-highlight';
import Facebook from './images/icon-facebook.svg';
import Twitter from './images/icon-twitter.svg';
import Instagram from './images/icon-instagram.svg';
import Youtube from './images/icon-youtube.svg';
import Down from './images/icon-down.svg';
import Up from './images/icon-up.svg';
import CardOverview from './components/card-overview';
import OverviewHeader from './components/overview-header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="container-header">
        <Header />
        </div>
        <div className="container-highlights">
          <CardHighlight
            classSN="classFacebook"
            logoSocialNetwork = {Facebook}
            alt = 'Facebook' 
            User = "@nathanf"
            numFollowers = '1987'
            kind = "Followers" 
            upDown = {Up}
            classToday ="up" />

          <CardHighlight
            classSN="classTwitter"
            logoSocialNetwork = {Twitter}
            alt = 'Twitter' 
            User = "@nathanf"
            numFollowers = '1044'
            kind = "Followers" 
            upDown = {Up} 
            classToday ="up"/>

          <CardHighlight
            classSN="classInstagram"
            logoSocialNetwork = {Instagram}
            alt = 'Instagram'
            User = "@realnathanf" 
            numFollowers = '11k'
            kind = "Followers" 
            upDown = {Up} 
            classToday ="up"/>

          <CardHighlight
            classSN="classYoutube"
            logoSocialNetwork = {Youtube}
            alt = 'Youtube' 
            User = "Nathan F."
            numFollowers = '8239'
            kind = "Suscribers" 
            upDown = {Down} 
            classToday ="down"/>
          </div>
        < OverviewHeader />
        <div className="container-overview-cards">
          <CardOverview
            Concept = 'Page Views'
            Amount = '87'
            snLogo = {Facebook}
            alt = 'Facebook'
            upDown = {Up}
            classToday = 'up'
            Difference = "3%" />

          <CardOverview
            Concept = 'Likes'
            Amount = '52'
            snLogo = {Facebook}
            alt = 'Facebook'
            upDown = {Down}
            classToday = 'down'
            Difference = "2%" />

          <CardOverview
            Concept = 'Likes'
            Amount = '5462'
            snLogo = {Instagram}
            alt = 'Instagram'
            upDown = {Up}
            classToday = 'up'
            Difference = "2257%" />

          <CardOverview
            Concept = 'Profile Views'
            Amount = '52k'
            snLogo = {Instagram}
            alt = 'Instagram'
            upDown = {Up}
            classToday = 'up'
            Difference = "1375%" />

          <CardOverview
            Concept = 'Retweets'
            Amount = '117'
            snLogo = {Twitter}
            alt = 'Twitter'
            upDown = {Up}
            classToday = 'up'
            Difference = "303%" />

          <CardOverview
            Concept = 'Likes'
            Amount = '507'
            snLogo = {Twitter}
            alt = 'Twitter'
            upDown = {Up}
            classToday = 'up'
            Difference = "553%" />

          <CardOverview
            Concept = 'Likes'
            Amount = '107'
            snLogo = {Youtube}
            alt = 'Youtube'
            upDown = {Down}
            classToday = 'down'
            Difference = "19%" />

          <CardOverview
            Concept = 'Total Views'
            Amount = '1407'
            snLogo = {Youtube}
            alt = 'Youtube'
            upDown = {Down}
            classToday = 'down'
            Difference = "12%" />
        </div>
      </div>
    </div>
  );
}

export default App;
