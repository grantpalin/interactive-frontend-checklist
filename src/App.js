import React, { Component } from 'react';
import logo from './logo.svg';
import Criteria from "./Components/Criteria";
import CriteriaGroup from './Components/CriteriaGroup';
import Criterion from "./Components/Criterion";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupTallies: []
    };

    this.updateGroupTallies = this.updateGroupTallies.bind(this);
  }

  // used to allow lower-level components - namely, CriteriaGroup instances - to send data updates back upstream for display
  updateGroupTallies(id, low, medium, high) {
    let groupTallies = this.state.groupTallies;
    groupTallies.push({id: id, low: low, med: medium, high: high});

    this.setState({
      groupTallies: groupTallies
    });
  }

  render() {
    // prepare the row data for tabulation
    const rowData = this.state.groupTallies.map(tally => {
      return {id: tally.id, low: tally.low, med: tally.med, high: tally.high, total: tally.low + tally.med + tally.high};
    });

    // create totals data based on the row data
    const footerData = rowData.reduce((accumulator, current) => {
      return {low: current.low + accumulator.low, med: current.med + accumulator.med, high: current.high + accumulator.high, total: current.total + accumulator.total}
    }, {low: 0, med: 0, high: 0, total: 0});

    // generate the table row markup
    const rows = rowData.map((tally, index) => {
      return (
        <tr key={index}>
          <th scope="row">{tally.id}</th>
          <td className="high">{tally.high}</td>
          <td className="medium">{tally.med}</td>
          <td className="low">{tally.low}</td>
          <td className="total">{tally.total}</td>
        </tr>
      );
    });

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Interactive Front-End Checklist</h1>
        </header>
        <main>
          <table className="checks-remaining">
            <caption>Checks Remaining</caption>
            <thead>
              <tr>
                <th>Category</th>
                <th className="high">High</th>
                <th className="medium">Medium</th>
                <th className="low">Low</th>
                <th className="total">Total</th>
              </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Totals</th>
                <td>{footerData.high}</td>
                <td>{footerData.med}</td>
                <td>{footerData.low}</td>
                <td>{footerData.total}</td>
              </tr>
            </tfoot>
          </table>

          <Criteria>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Head">
              <Criterion priority="high" label="Doctype"              text="The Doctype is HTML5 and is at the top of all your HTML pages." />
              <Criterion priority="high" label="Charset"              text="The charset (UTF-8) is declared correctly." />
              <Criterion priority="med"  label="X-UA-Compatible"      text="The X-UA-Compatible meta tag is present." />
              <Criterion priority="high" label="Viewport"             text="The viewport is declared correctly." />
              <Criterion priority="high" label="Title"                text="A title is used on all pages (SEO: Google calculate the pixel width of the characters used in the title, cut off between 472 and 482 pixels. Average character limit would be around 55-characters)." />
              <Criterion priority="high" label="Description"          text="A meta description is provided, it is unique and doesn't possess more than 150 characters." />
              <Criterion priority="med"  label="Favicons"             text="Each favicon has been created and displays correctly. If you have only a favicon.ico, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, PNG format is recommended over .ico format (dimensions: 32x32px)." />
              <Criterion priority="low"  label="Apple Touch Icon"     text="Apple touch favicon apple-mobile-web-app-capable are present (Create your Apple Icon file with at least 200x200px dimension to support all dimensions that you may need)." />
              <Criterion priority="low"  label="Windows Tiles"        text="Windows tiles are present and linked." />
              <Criterion priority="med"  label="Canonical"            text='Use rel="canonical" to avoid duplicate content.' />
              <Criterion priority="high" label="Language attribute"   text="The lang attribute of your website is specified and related to the language of the current page." />
              <Criterion priority="med"  label="Direction attribute"  text="The direction of lecture is specified on the html tag (It can be used on another HTML tag)." />
              <Criterion priority="low"  label="Alternate language"   text="The language tag of your website is specified and related to the language of the current page." />
              <Criterion priority="low"  label="Conditional comments" text="Conditional comments are present for IE if needed." />
              <Criterion priority="low"  label="RSS feed"             text="If your project is a blog or has articles, an RSS link was provided." />
              <Criterion priority="med"  label="Inline critical CSS"  text='CSS which styles content that is immediately visible during pageload ("above the fold content") is called "critical CSS". It is embedded before your principal CSS call and between <style></style> in a single line (minified).' />
              <Criterion priority="high" label="CSS order"            text="All CSS files are loaded before any JavaScript files in the <head>. (Except the case where sometimes JS files are loaded asynchronously on top of your page)." />
              <Criterion priority="low"  label="Facebook Open Graph"  text="All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, 1200 x 630 pixels recommended." />
              <Criterion priority="low"  label="Twitter Card"         text="" />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="HTML">
              <Criterion priority="high" label="HTML5 semantic elements" text="HTML5 Semantic Elements are used appropriately (header, section, footer, main...)." />
              <Criterion priority="high" label="Error pages"             text="Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server)." />
              <Criterion priority="med"  label="Noopener"                text='In case you are using external links with target="_blank", your link should have a rel="noopener" attribute to prevent tab nabbing. If you need to support older versions of Firefox, use rel="noopener noreferrer".' />
              <Criterion priority="low"  label="Clean up comments"       text="Unnecessary code needs to be removed before sending the page to production." />
              <Criterion priority="high" label="W3C compliant"           text="All pages need to be tested with the W3C validator to identify possible issues in the HTML code." />
              <Criterion priority="high" label="HTML Lint"               text="I use tools to help me analyze any issues I could have on my HTML code." />
              <Criterion priority="high" label="Link checker"            text="There are no broken links in my page, verify that you don't have any 404 error." />
              <Criterion priority="med"  label="Adblockers test"         text="Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker)." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Webfonts">
              <Criterion priority="high" label="Webfont format" text="WOFF, WOFF2 and TTF are supported by all modern browsers." />
              <Criterion priority="high" label="Webfont size"   text="Webfont sizes don't exceed 2 MB (all variants included)." />
              <Criterion priority="low"  label="Webfont loader" text="Control loading behavior with a webfont loader." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="CSS">
              <Criterion priority="high" label="Responsive Web Design"  text="The website is using responsive web design." />
              <Criterion priority="med"  label="CSS print"              text="A print stylesheet is provided and is correct on each page." />
              <Criterion priority="low"  label="Preprocessors"          text="Your page is using a CSS preprocessor (Sass is preferred)." />
              <Criterion priority="high" label="Unique ID"              text="If IDs are used, they are unique to a page." />
              <Criterion priority="high" label="Reset CSS"              text="A CSS reset (reset, normalize or reboot) is used and up to date. (If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)" />
              <Criterion priority="low"  label="JS prefix"              text="All classes (or id- used in JavaScript files) begin with js- and are not styled into the CSS files." />
              <Criterion priority="high" label="Embedded or inline CSS" text="Avoid at all cost embeding CSS in <style> tags or using inline CSS: only use for valid reasons (e.g. background-image for slider, critical CSS)." />
              <Criterion priority="high" label="Vendor prefixes"        text="CSS vendor prefixes are used and are generated accordingly with your browser support compatibility." />
              <Criterion priority="high" label="Concatenation"          text="CSS files are concatenated in a single file (Not for HTTP/2)." />
              <Criterion priority="high" label="Minification"           text="All CSS files are minified." />
              <Criterion priority="high" label="Non-blocking"           text="CSS files need to be non-blocking to prevent the DOM from taking time to load." />
              <Criterion priority="low"  label="Unused CSS"             text="Remove unused CSS." />
              <Criterion priority="high" label="Stylelint"              text="All CSS or SCSS files are without any errors." />
              <Criterion priority="high" label="Responsive web design"  text="All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics)." />
              <Criterion priority="med"  label="CSS Validator"          text="The CSS was tested and pertinent errors were corrected." />
              <Criterion priority="high" label="Desktop browsers"       text="All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, Edge...)." />
              <Criterion priority="high" label="Mobile browsers"        text="All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...)." />
              <Criterion priority="high" label="OS"                     text="All pages were tested on all current OS (Windows, Android, iOS, Mac...)." />
              <Criterion priority="high" label="Pixel perfect"          text="Pages are close to pixel perfect. Depending on the quality of the creatives, you may not be 100% accurate, but your page needs to be close to your template." />
              <Criterion priority="high" label="Reading direction"      text="All pages need to be tested for LTR and RTL languages if they need to be supported." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Images">
              <Criterion priority="high" label="Optimization"     text="All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage)." />
              <Criterion priority="med"  label="Picture/srcset"   text="You use picture/srcset to provide the most appropriate image for the current viewport of the user." />
              <Criterion priority="low"  label="Retina"           text="You provide layout images 2x or 3x, support retina display." />
              <Criterion priority="med"  label="Sprite"           text="Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image)." />
              <Criterion priority="high" label="Width and height" text="Set width and height attributes on <img> if the final rendered image size is known (can be omitted for CSS sizing)." />
              <Criterion priority="high" label="Alternative text" text="All <img> have an alternative text which describe the image visually." />
              <Criterion priority="med"  label="Lazy loading"     text=" Images are lazyloaded (A noscript fallback is always provided)." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="JavaScript">
              <Criterion priority="high" label="No inline JavaScript" text="You don't have any JavaScript code inline (mixed with your HTML code)." />
              <Criterion priority="high" label="Concatenation"        text="JavaScript files are concatenated." />
              <Criterion priority="high" label="JavaScript files are minified (you can add the .min suffix)." text="JavaScript files are minified (you can add the .min suffix)." />
              <Criterion priority="high" label="JavaScript security"  text="" />
              <Criterion priority="med"  label="Non-blocking"         text="JavaScript files are loaded asynchronously using async or deferred using defer attribute." />
              <Criterion priority="low"  label="Modernizr"            text="If you need to target some specific features you can use a custom Modernizr to add classes in your <html> tag." />
              <Criterion priority="high" label="ESLint"               text="No errors are flagged by ESLint (based on your configuration or standards rules)." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Security">
              <Criterion priority="med"  label="HTTPS"                                 text="HTTPS is used on every pages and for all external content (plugins, images...)." />
              <Criterion priority="med"  label="HTTP Strict Transport Security (HSTS)" text="The HTTP header is set to 'Strict-Transport-Security'." />
              <Criterion priority="high" label="Cross Site Request Forgery (CSRF)"     text="You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks." />
              <Criterion priority="high" label="Cross Site Scripting (XSS)"            text="Your page or website is free from XSS possible issues." />
              <Criterion priority="med"  label="Content type options"                  text="Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server." />
              <Criterion priority="med"  label="X-Frame-Options (XFO)"                 text="Protects your visitors against clickjacking attacks." />
              <Criterion priority="med"  label="Content security policy"               text="Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Performance">
              <Criterion priority="high" label="Page weight"            text="The weight of each page is between 0 and 500 KB." />
              <Criterion priority="med"  label="Minification"           text="HTML is minified." />
              <Criterion priority="med"  label="Lazy loading"           text="Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections)." />
              <Criterion priority="med"  label="Cookie size"            text="If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies." />
              <Criterion priority="med"  label="Third party components" text="Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your users activity private." />
              <Criterion priority="low"  label="DNS resolution"         text="DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch." />
              <Criterion priority="low"  label="Preconnection"          text="DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using preconnect." />
              <Criterion priority="low"  label="Prefetching"            text="Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using prefetch." />
              <Criterion priority="low"  label="Preloading"             text="Resources needed in the current page (e.g. scripts placed at the end of <body>) in advance using preload." />
              <Criterion priority="high" label="Google PageSpeed"       text="All your pages were tested (not only the homepage) and have a score of at least 90/100." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="Accessibility">
              <Criterion priority="med"  label="Progressive enhancement"             text="Major functionality like main navigation and search should work without JavaScript enabled." />
              <Criterion priority="med"  label="Color contrast"                      text="Color contrast should at least pass WCAG AA (AAA for mobile)." />
              <Criterion priority="high" label="H1"                                  text="All pages have an H1 which is not the title of the website." />
              <Criterion priority="high" label="Headings"                            text="Headings should be used properly in the right order (H1 to H6)." />
              <Criterion priority="high" label="Role banner"                         text='<header> has role="banner".' />
              <Criterion priority="high" label="Role navigation"                     text='<nav> has role="navigation".' />
              <Criterion priority="high" label="Role main"                           text='<main> has role="main".' />
              <Criterion priority="med"  label="Specific HTML5 input types are used" text="This is especially important for mobile devices that show customized keypads and widgets for different types." />
              <Criterion priority="high" label="Label"                               text="A label is associated with each input form element. In case a label can't be displayed, use aria-label instead." />
              <Criterion priority="high" label="Accessibility standards testing"     text="Use the WAVE tool to test if your page respects the accessibility standards." />
              <Criterion priority="high" label="Keyboard navigation"                 text="Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable." />
              <Criterion priority="med"  label="Screen-reader"                       text="All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx)." />
              <Criterion priority="high" label="Focus style"                         text="If the focus is disabled, it is replaced by visible state in CSS." />
            </CriteriaGroup>
            <CriteriaGroup updateMasterTallies={this.updateGroupTallies} title="SEO">
              <Criterion priority="high" label="Google Analytics" text="Google Analytics is installed and correctly configured." />
              <Criterion priority="med"  label="Headings"         text="Heading text helps to understand the content in the current page." />
              <Criterion priority="high" label="sitemap.xml"      text="A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools)." />
              <Criterion priority="high" label="robots.txt"       text="The robots.txt is not blocking webpages." />
              <Criterion priority="high" label="Structured data"  text="Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page." />
              <Criterion priority="med"  label="Sitemap"          text="An HTML sitemap is provided and is accessible via a link in the footer of your website." />
              <Criterion priority="med"  label="Pagination links" text='Provide rel="prev" and rel="next" to indicate paginated content.' />
            </CriteriaGroup>
          </Criteria>
        </main>
        <footer>
          <p>This is an <a href="https://github.com/grantpalin/interactive-frontend-checklist">open-source project</a> by <a href="https://grantpalin.com/">Grant Palin</a>, inspired by the <a href="https://github.com/thedaviddias/Front-End-Checklist">Front-End Checklist</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
