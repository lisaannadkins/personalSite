const { render } = ReactDOM

const {
  HashRouter,
  Route,
  Link
} = ReactRouterDOM

const App = () => (
  <HashRouter>
    <nav role="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Resum&eacute; &amp; Writing</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
    </nav>
  </HashRouter>
)

const Home = () => (
  <div id='home' aria-live='polite'>
    <h3>Home</h3>
    <p>I am a UI developer and UX designer with nearly a decade of experience crafting rich user experiences. My areas of expertise include HTML(5), CSS, JavaScript, interaction design, information architecture, and user testing.</p>
    <p>I am passionate about and a vocal advocate for web accessibility. #a11y</p>
  </div>
    
)

const Portfolio = () => (
  <div id='portfolio' aria-live='polite'>
    <h3>Resum&eacute; &amp; Writing</h3>
   
    <h4>Writing</h4>
    <a href="https://medium.com/@lisacan/building-accessible-single-page-apps-2ea3e4fbbc01" target="_blank">Building Accessible Single Page Apps (published on Medium and by Codeburst.io)</a>
    <a href="https://medium.com/@lisacan/techniques-for-correcting-the-grid-illusion-334ae14dabba" target="_blank">Techniques for Correcting the Grid Illusion</a>
    <a href="https://drive.google.com/file/d/0BxEdYcjBPYKcY1ZtZnNwdDQwbFE/view?usp=sharing" target="_blank">Accessibility Analysis for Ethics &amp; Compliance Application</a>
    <h4 id="digital-resume">Digital Resum&eacute;</h4>
     <a href="https://drive.google.com/file/d/0BxEdYcjBPYKcQnJXOFl3eFo1cVU/view?usp=sharing" target="_blank">View PDF Resum&eacute; </a>
    <h5>Experience</h5>
    <ul className="resume-list">
      <li>
        <ul>
          <li className="title">Team Lead, UI/UX</li>
          <li className="company">United Shore Financial Services</li>
          <li className="location">Troy, MI</li>
          <li className="dates">2016 - present</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">Senior UI Developer</li>
          <li className="company">Convercent</li>
          <li className="location">Denver, CO</li>
          <li className="dates">2014-2016</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">Senior UX Engineer</li>
          <li className="company">Care.com HomePay</li>
          <li className="location">Austin, TX</li>
          <li className="dates">2014</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">User Experience Lead</li>
          <li className="company">E2open</li>
          <li className="location">Austin, TX</li>
          <li className="dates">2012 - 2014</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">Lead Front-End Developer</li>
          <li className="company">BuildASign</li>
          <li className="location">Austin, TX</li>
          <li className="dates">2011 - 2012</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">Software Developer</li>
          <li className="company">Blue Moon Software</li>
          <li className="location">Austin, TX</li>
          <li className="dates">2010 - 2011</li>
        </ul>
        </li>
      <li>
        <ul>
          <li className="title">Interface Developer</li>
          <li className="company">JSTOR / Ithaka</li>
          <li className="location">Ann Arbor, MI</li>
          <li className="dates">2008-2010</li>
        </ul>
        </li>
    </ul>
    <h5>Education</h5>
    <ul className="resume-list">
      <li>
        <ul>
          <li className="degree">Bachelor of Science</li>
          <li className="university">Eastern Michigan University</li>
          <li className="location">Ypsilanti, MI</li>
          <li className="dates">2006</li>
        </ul>
      </li>
    </ul>
  </div>
    
)

const Contact = ({ match }) => (
  <div id='contact' aria-live='polite'>
    <h3>Contact</h3> 
   <a href="mailto:caniglialisa@gmail.com" title="Email">
          <i className="fa fa-envelope" aria-hidden="true"></i>
				</a>
				<a href="tel:3136750275" title="Mobile Phone">
					<i className="fa fa-phone-square" aria-hidden="true"></i>
				</a>
				<a href="https://www.linkedin.com/in/lisaannadkins/" target="_blank" rel="noopener" title="LinkedIn" >
					<i className="fa fa-linkedin-square" aria-hidden="true"></i>
				</a>
				<a href="https://github.com/lisaannadkins" target="_blank" rel="noopener" title="github">
					<i className="fa fa-github" aria-hidden="true"></i>
					
				</a>
				<a href="https://www.freecodecamp.org/lisaannadkins" target="_blank" rel="noopener" title="Free Code Camp">
					<i className="fa fa-free-code-camp" aria-hidden="true"></i>
					
				</a>
				<a href="https://codepen.io/lisacaniglia/" target="_blank" rel="noopener" title="CodePen">
					<i className="fa fa-codepen" aria-hidden="true"></i>
				</a>
				<a href="https://www.meetup.com/members/12571824/" target="_blank" rel="noopener" title="Meetup">
					<i className="fa fa-meetup" aria-hidden="true"></i>
				</a>
				<a href="https://twitter.com/lisaannomaly" target="_blank" rel="noopener" title="Twitter">
					<i className="fa fa-twitter" aria-hidden="true"></i>
				</a>
  </div>
    
    
)  

render(<App/>, document.getElementById('root'))