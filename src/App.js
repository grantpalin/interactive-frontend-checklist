import React, { Component } from 'react';
import CriteriaGroup from './Components/CriteriaGroup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const data = [
      {
        title: "Head", criteria: [
          {level: "high", label: "Doctype", description: "The Doctype is HTML5 and is at the top of all your HTML pages."},
          {level: "high", label: "Charset", description: "The charset (UTF-8) is declared correctly."},
          {level: "med",  label: "X-UA-Compatible", description: "The X-UA-Compatible meta tag is present."},
          {level: "high", label: "Viewport", description: "The viewport is declared correctly."},
          {level: "high", label: "Title", description: "A title is used on all pages (SEO: Google calculate the pixel width of the characters used in the title, cut off between 472 and 482 pixels. Average character limit would be around 55-characters)."},
          {level: "high", label: "Description", description: "A meta description is provided, it is unique and doesn't possess more than 150 characters."},
          {level: "med",  label: "Favicons", description: "Each favicon has been created and displays correctly. If you have only a favicon.ico, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, PNG format is recommended over .ico format (dimensions: 32x32px)."},
          {level: "low",  label: "Apple Touch Icon", description: "Apple touch favicon apple-mobile-web-app-capable are present (Create your Apple Icon file with at least 200x200px dimension to support all dimensions that you may need)."},
          {level: "low",  label: "Windows Tiles", description: "Windows tiles are present and linked."},
          {level: "med",  label: "Canonical", description: "Use rel=\"canonical\" to avoid duplicate content."},
          {level: "high", label: "Language attribute", description: "The lang attribute of your website is specified and related to the language of the current page."},
          {level: "med",  label: "Direction attribute", description: "The direction of lecture is specified on the html tag (It can be used on another HTML tag)."},
          {level: "low",  label: "Alternate language", description: "The language tag of your website is specified and related to the language of the current page."},
          {level: "low",  label: "Conditional comments", description: "Conditional comments are present for IE if needed."},
          {level: "low",  label: "RSS feed", description: "If your project is a blog or has articles, an RSS link was provided."},
          {level: "med",  label: "Inline critical CSS", description: "CSS which styles content that is immediately visible during pageload (\"above the fold content\") is called \"critical CSS\". It is embedded before your principal CSS call and between <style></style> in a single line (minified)."},
          {level: "high", label: "CSS order", description: "All CSS files are loaded before any JavaScript files in the <head>. (Except the case where sometimes JS files are loaded asynchronously on top of your page)."},
          {level: "low",  label: "Facebook Open Graph", description: "All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, 1200 x 630 pixels recommended."},
          {level: "low",  label: "Twitter Card", description: ""},
        ]
      },
      {
        title: "HTML", criteria: [
          {level: "high", label: "HTML5 semantic elements", description: "HTML5 Semantic Elements are used appropriately (header, section, footer, main...)."},
          {level: "high", label: "Error pages", description: "Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server)."},
          {level: "med",  label: "Noopener", description: "In case you are using external links with target=\"_blank\", your link should have a rel=\"noopener\" attribute to prevent tab nabbing. If you need to support older versions of Firefox, use rel=\"noopener noreferrer\"."},
          {level: "low",  label: "Clean up comments", description: "Unnecessary code needs to be removed before sending the page to production."},
          {level: "high", label: "W3C compliant", description: "All pages need to be tested with the W3C validator to identify possible issues in the HTML code."},
          {level: "high", label: "HTML Lint", description: "I use tools to help me analyze any issues I could have on my HTML code."},
          {level: "high", label: "Link checker", description: "There are no broken links in my page, verify that you don't have any 404 error."},
          {level: "med",  label: "Adblockers test", description: "Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker)."},
        ]
      },
      {
        title: "Webfonts", criteria: [
          {level: "high", label: "Webfont format", description: "WOFF, WOFF2 and TTF are supported by all modern browsers."},
          {level: "high", label: "Webfont size", description: "Webfont sizes don't exceed 2 MB (all variants included)."},
          {level: "low",  label: "Webfont loader", description: "Control loading behavior with a webfont loader."},
        ]
      },
      {
        title: "CSS", criteria: [
          {level: "high", label: "Responsive Web Design", description: "The website is using responsive web design."},
          {level: "med",  label: "CSS print", description: "A print stylesheet is provided and is correct on each page."},
          {level: "low",  label: "Preprocessors", description: "Your page is using a CSS preprocessor (Sass is preferred)."},
          {level: "high", label: "Unique ID", description: "If IDs are used, they are unique to a page."},
          {level: "high", label: "Reset CSS", description: "A CSS reset (reset, normalize or reboot) is used and up to date. (If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)"},
          {level: "low",  label: "JS prefix", description: "All classes (or id- used in JavaScript files) begin with js- and are not styled into the CSS files."},
          {level: "high", label: "Embedded or inline CSS", description: "Avoid at all cost embedding CSS in <style> tags or using inline CSS: only use for valid reasons (e.g. background-image for slider, critical CSS)."},
          {level: "high", label: "Vendor prefixes", description: "CSS vendor prefixes are used and are generated accordingly with your browser support compatibility."},
          {level: "high", label: "Concatenation", description: "CSS files are concatenated in a single file (Not for HTTP/2)."},
          {level: "high", label: "Minification", description: "All CSS files are minified."},
          {level: "high", label: "Non-blocking", description: "CSS files need to be non-blocking to prevent the DOM from taking time to load."},
          {level: "low",  label: "Unused CSS", description: "Remove unused CSS."},
          {level: "high", label: "Stylelint", description: "All CSS or SCSS files are without any errors."},
          {level: "high", label: "Responsive web design", description: "All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics)."},
          {level: "med",  label: "CSS Validator", description: "The CSS was tested and pertinent errors were corrected."},
          {level: "high", label: "Desktop browsers", description: "All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, Edge...)."},
          {level: "high", label: "Mobile browsers", description: "All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...)."},
          {level: "high", label: "OS", description: "All pages were tested on all current OS (Windows, Android, iOS, Mac...)."},
          {level: "high", label: "Pixel perfect", description: "Pages are close to pixel perfect. Depending on the quality of the creatives, you may not be 100% accurate, but your page needs to be close to your template."},
          {level: "high", label: "Reading direction", description: "All pages need to be tested for LTR and RTL languages if they need to be supported."},
        ]
      },
      {
        title: "Images", criteria: [
          {level: "high", label: "Optimization", description: "All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage)."},
          {level: "med",  label: "Picture/srcset", description: "You use picture/srcset to provide the most appropriate image for the current viewport of the user."},
          {level: "low",  label: "Retina", description: "You provide layout images 2x or 3x, support retina display."},
          {level: "med",  label: "Sprite", description: "Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image)."},
          {level: "high", label: "Width and height", description: "Set width and height attributes on <img> if the final rendered image size is known (can be omitted for CSS sizing)."},
          {level: "high", label: "Alternative text", description: "All <img> have an alternative text which describe the image visually."},
          {level: "med",  label: "Lazy loading", description: "Images are lazyloaded (a noscript fallback is always provided)."},
        ]
      },
      {
        title: "JavaScript", criteria: [
          {level: "high", label: "No inline JavaScript", description: "You don't have any JavaScript code inline (mixed with your HTML code)."},
          {level: "high", label: "Concatenation", description: "JavaScript files are concatenated."},
          {level: "high", label: "Minification", description: "JavaScript files are minified (you can add the .min suffix)."},
          {level: "high", label: "JavaScript security", description: ""},
          {level: "med",  label: "Non-blocking", description: "JavaScript files are loaded asynchronously using async or deferred using defer attribute."},
          {level: "low",  label: "Modernizr", description: "If you need to target some specific features you can use a custom Modernizr to add classes in your <html> tag."},
          {level: "high", label: "ESLint", description: "No errors are flagged by ESLint (based on your configuration or standards rules)."},
        ]
      },
      {
        title: "Security", criteria: [
          {level: "med",  label: "HTTPS", description: "HTTPS is used on every pages and for all external content (plugins, images...)."},
          {level: "med",  label: "HTTP Strict Transport Security (HSTS)", description: "The HTTP header is set to 'Strict-Transport-Security'."},
          {level: "high", label: "Cross Site Request Forgery (CSRF)", description: "You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks."},
          {level: "high", label: "Cross Site Scripting (XSS)", description: "Your page or website is free from XSS possible issues."},
          {level: "med",  label: "Content type options", description: "Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server."},
          {level: "med",  label: "X-Frame-Options (XFO)", description: "Protects your visitors against clickjacking attacks."},
          {level: "med",  label: "Content security policy", description: "Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks."},
        ]
      },
      {
        title: "Performance", criteria: [
          {level: "high", label: "Page weight", description: "The weight of each page is between 0 and 500 KB."},
          {level: "med",  label: "Minification", description: "HTML is minified."},
          {level: "med",  label: "Lazy loading", description: "Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections)."},
          {level: "med",  label: "Cookie size", description: "If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies."},
          {level: "med",  label: "Third party components", description: "Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your users activity private."},
          {level: "low",  label: "DNS resolution", description: "DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch."},
          {level: "low",  label: "Preconnection", description: "DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using preconnect."},
          {level: "low",  label: "Prefetching", description: "Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using prefetch."},
          {level: "low",  label: "Preloading", description: "Resources needed in the current page (e.g. scripts placed at the end of <body>) in advance using preload."},
          {level: "high", label: "Google PageSpeed", description: "All your pages were tested (not only the homepage) and have a score of at least 90/100."},
        ]
      },
      {
        title: "Accessibility", criteria: [
          {level: "med",  label: "Progressive enhancement", description: "Major functionality like main navigation and search should work without JavaScript enabled."},
          {level: "med",  label: "Color contrast", description: "Color contrast should at least pass WCAG AA (AAA for mobile)."},
          {level: "high", label: "H1", description: "All pages have an H1 which is not the title of the website."},
          {level: "high", label: "Headings", description: "Headings should be used properly in the right order (H1 to H6)."},
          {level: "high", label: "Role banner", description: "<header> has role=\"banner\"."},
          {level: "high", label: "Role navigation", description: "<nav> has role=\"navigation\"."},
          {level: "high", label: "Role main", description: "<main> has role=\"main\"."},
          {level: "med",  label: "Specific HTML5 input types are used", description: "This is especially important for mobile devices that show customized keypads and widgets for different types."},
          {level: "high", label: "Label", description: "A label is associated with each input form element. In case a label can't be displayed, use aria-label instead."},
          {level: "high", label: "Accessibility standards testing", description: "Use the WAVE tool to test if your page respects the accessibility standards."},
          {level: "high", label: "Keyboard navigation", description: "Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable."},
          {level: "med",  label: "Screen-reader", description: "All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx)."},
          {level: "high", label: "Focus style", description: "If the focus is disabled, it is replaced by visible state in CSS."},
        ]
      },
      {
        title: "SEO", criteria: [
          {level: "high", label: "Google Analytics", description: "Google Analytics is installed and correctly configured."},
          {level: "med",  label: "Headings", description: "Heading text helps to understand the content in the current page."},
          {level: "high", label: "sitemap.xml", description: "A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools)."},
          {level: "high", label: "robots.txt", description: "The robots.txt is not blocking webpages."},
          {level: "high", label: "Structured data", description: "Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page."},
          {level: "med",  label: "Sitemap", description: "An HTML sitemap is provided and is accessible via a link in the footer of your website."},
          {level: "med",  label: "Pagination links", description: "Provide rel=\"prev\" and rel=\"next\" to indicate paginated content."},
        ]
      },
    ];

    // calculate the initial number of criteria yet to be satisfied
    const groupTallies = data.map(group => {
      const criteria = group.criteria.map(criterion => {
        return criterion.level;
      });

      const levelCounts = {
        low: criteria.filter(level => level === 'low').length,
        med: criteria.filter(level => level === 'med').length,
        high: criteria.filter(level => level === 'high').length,
      };

      return { id: group.title, low: levelCounts.low, med: levelCounts.med, high: levelCounts.high };
    });

    // keep both the tallies and the source data in local state
    this.state = {
      data,
      groupTallies,
      headerDetailsVisible: false
    };

    this.updateGroupTallies = this.updateGroupTallies.bind(this);
    this.toggleHeaderDetailsVisibility = this.toggleHeaderDetailsVisibility.bind(this);
  }

  // used to allow lower-level components - namely, CriteriaGroup instances - to send data updates back upstream for display
  updateGroupTallies(id, low, medium, high) {
    // retrieve the tallies from state and find the group that needs updating
    let groupTallies = this.state.groupTallies;
    const idx = groupTallies.findIndex(val => {return val.id === id});

    // update the group's tallies
    groupTallies[idx] = { id: id, low: low, med: medium, high: high };

    // update the local state
    this.setState({
      groupTallies
    });
  }

  toggleHeaderDetailsVisibility() {
    this.setState({
      headerDetailsVisible: !this.state.headerDetailsVisible
    })
  }

  render() {
    const groups = this.state.data.map((group, index) => {
      return (
        <CriteriaGroup title={group.title} updateMasterTallies={this.updateGroupTallies} criteria={group.criteria} key={index} />
      );
    });

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
          {tally.total === 0 ? <td className="checkmark">&#10003;</td> : null}
        </tr>
      );
    });

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Interactive Front-End Checklist</h1>
          <button className="header-detail-toggle" onClick={this.toggleHeaderDetailsVisibility} data-header-details-toggle-visible={!this.state.headerDetailsVisible}>What's This?</button>
          <div className="app-intro" data-header-details-visible={this.state.headerDetailsVisible}>
            <p>Interactive Front-End Checklist (IFEC for short) is an interactive listing of considerations when preparing a website or web application.</p>
            <p>Checking off items will reduce the count of outstanding items to be reviewed and resolved. Fewer outstanding is better!</p>
            <button className="header-detail-toggle" onClick={this.toggleHeaderDetailsVisibility}>Close</button>
          </div>
        </header>
        <aside className="main-summary">
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
                <td className="checkmark">{footerData.total === 0 ? <span>&#10003;</span> : null}</td>
              </tr>
            </tfoot>
          </table>
        </aside>

        <main>
          {groups}
        </main>
        <footer>
          <p>This is an <a href="https://github.com/grantpalin/interactive-frontend-checklist">open-source project</a> by <a href="https://grantpalin.com/">Grant Palin</a>, inspired by the <a href="https://github.com/thedaviddias/Front-End-Checklist">Front-End Checklist</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
