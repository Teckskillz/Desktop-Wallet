import React, { Component } from "react";

import Anime from "react-anime";

export class TronIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 236.1 271"
      >
        <line strokeWidth="10" x1="3.7" y1="4.7" x2="115.3" y2="134" />
        <line strokeWidth="10" x1="114.6" y1="134" x2="100.2" y2="267.5" />
        <line strokeWidth="15" x1="3.5" y1="3.5" x2="192" y2="48.7" />
        <line strokeWidth="10" x1="192" y1="49.5" x2="114.6" y2="134" />
        <line strokeWidth="15" x1="232.6" y1="76.8" x2="101" y2="267.5" />
        <line strokeWidth="10" x1="115.3" y1="134" x2="231.9" y2="76.8" />
        <line strokeWidth="15" x1="192" y1="48.7" x2="232.6" y2="76.8" />
        <line strokeWidth="10" x1="2.8" y1="4.5" x2="100.2" y2="268.5" />
      </svg>
    );
  }
}

export class TokensIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M14,4C17.32,4 20,6.69 20,10C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
      </svg>
    );
  }
}

export class VoteIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z" />
      </svg>
    );
  }
}

export class WalletIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path d="M16 6H3.5v-.5l11-.88v.88H16V4c0-1.1-.891-1.872-1.979-1.717L3.98 3.717C2.891 3.873 2 4.9 2 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z" />
      </svg>
    );
  }
}

export class ContactIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" />
      </svg>
    );
  }
}

export class SettingsIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 0 0-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 1.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 0 0 .691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 0 0 1.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 0 0 .692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z" />
      </svg>
    );
  }
}

export class ReceiveIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22H20A2,2 0 0,0 22,20V12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
      </svg>
    );
  }
}

export class SendIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 512 512"
      >
        <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z" />
      </svg>
    );
  }
}

export class MoreIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
      </svg>
    );
  }
}

export class SearchIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    );
  }
}

export class TopRightArrow extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
      </svg>
    );
  }
}

export class CalendarIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
      </svg>
    );
  }
}

export class ArrowLeftIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
    );
  }
}

export class ArrowRightIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    );
  }
}

export class DownloadIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
      </svg>
    );
  }
}

export class BookIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />
      </svg>
    );
  }
}

export class QuestionMarkIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
      </svg>
    );
  }
}

export class ShareIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
      </svg>
    );
  }
}

export class BellIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z" />
      </svg>
    );
  }
}

export class WebGlobeIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    );
  }
}

export class QRScanIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z" />
      </svg>
    );
  }
}

export class BackArrowIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
      </svg>
    );
  }
}

export class CloseIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    );
  }
}

export class CopyIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
      </svg>
    );
  }
}

export class CommentIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M9,9V11H19V9H9M9,13V15H17V13H9Z" />
      </svg>
    );
  }
}

export class TwitterIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
      </svg>
    );
  }
}

export class FacebookIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
      </svg>
    );
  }
}

export class RedditIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22,11.5C22,10.1 20.9,9 19.5,9C18.9,9 18.3,9.2 17.9,9.6C16.4,8.7 14.6,8.1 12.5,8L13.6,4L17,5A2,2 0 0,0 19,7A2,2 0 0,0 21,5A2,2 0 0,0 19,3C18.3,3 17.6,3.4 17.3,4L13.3,3C13,2.9 12.8,3.1 12.7,3.4L11.5,8C9.5,8.1 7.6,8.7 6.1,9.6C5.7,9.2 5.1,9 4.5,9C3.1,9 2,10.1 2,11.5C2,12.4 2.4,13.1 3.1,13.6L3,14.5C3,18.1 7,21 12,21C17,21 21,18.1 21,14.5L20.9,13.6C21.6,13.1 22,12.4 22,11.5M9,11.8C9.7,11.8 10.2,12.4 10.2,13C10.2,13.6 9.7,14.2 9,14.2C8.3,14.2 7.8,13.7 7.8,13C7.8,12.3 8.3,11.8 9,11.8M15.8,17.2C14,18.3 10,18.3 8.2,17.2C8,17 7.9,16.7 8.1,16.5C8.3,16.3 8.6,16.2 8.8,16.4C10,17.3 14,17.3 15.2,16.4C15.4,16.2 15.7,16.3 15.9,16.5C16.1,16.7 16,17 15.8,17.2M15,14.2C14.3,14.2 13.8,13.6 13.8,13C13.8,12.3 14.4,11.8 15,11.8C15.7,11.8 16.2,12.4 16.2,13C16.2,13.7 15.7,14.2 15,14.2Z" />
      </svg>
    );
  }
}

export class TranslateIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
      </svg>
    );
  }
}

export class PersonIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      </svg>
    );
  }
}

export class SquareLoadingIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="41.5" y="41.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            calcMode="discrete"
          />
        </rect>
        <rect x="47.5" y="41.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            calcMode="discrete"
          />
        </rect>
        <rect x="53.5" y="41.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            calcMode="discrete"
          />
        </rect>
        <rect x="41.5" y="47.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            calcMode="discrete"
          />
        </rect>
        <rect x="53.5" y="47.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            calcMode="discrete"
          />
        </rect>
        <rect x="41.5" y="53.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            calcMode="discrete"
          />
        </rect>
        <rect x="47.5" y="53.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            calcMode="discrete"
          />
        </rect>
        <rect x="53.5" y="53.5" width="5" height="5" fill="#39414e">
          <animate
            attributeName="fill"
            values="#626f84;#39414e;#39414e"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="discrete"
          />
        </rect>
      </svg>
    );
  }
}

export class LockIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
      </svg>
    );
  }
}

export class SnowIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z" />
      </svg>
    );
  }
}

export class PencilIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
      </svg>
    );
  }
}

export class WifiIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" />
      </svg>
    );
  }
}

export class CheckMarkBoxAnimation extends Component {
  render() {
    return (
      <Anime scale={[0.1, 0.9]} duration={300} delay={150}>
        <svg
          className={this.props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <Anime
            easing="easeInOutSine"
            duration={3000}
            loop={false}
            delay={(el, index) => index * 500}
            strokeDashoffset={el => {
              var pathLength = 0;
              if (el.getTotalLength) {
                pathLength = el.getTotalLength();
                el.setAttribute("stroke-dasharray", pathLength);
              }
              return [pathLength, 0];
            }}
          >
            <path d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
          </Anime>
        </svg>
      </Anime>
    );
  }
}

export class WarningCircleAnimation extends Component {
  render() {
    return (
      <Anime scale={[0.1, 0.9]} duration={300} delay={150}>
        <svg
          className={this.props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <Anime
            easing="easeInOutSine"
            duration={3000}
            loop={false}
            delay={(el, index) => index * 500}
            strokeDashoffset={el => {
              var pathLength = 0;
              if (el.getTotalLength) {
                pathLength = el.getTotalLength();
                el.setAttribute("stroke-dasharray", pathLength);
              }
              return [pathLength, 0];
            }}
          >
            <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
          </Anime>
        </svg>
      </Anime>
    );
  }
}

export class QuestionMarkAnimation extends Component {
  render() {
    return (
      <Anime scale={[0.1, 0.9]} duration={300} delay={150}>
        <svg
          className={this.props.className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <Anime
            easing="easeInOutSine"
            duration={3000}
            loop={false}
            delay={(el, index) => index * 500}
            strokeDashoffset={el => {
              var pathLength = 0;
              if (el.getTotalLength) {
                pathLength = el.getTotalLength();
                el.setAttribute("stroke-dasharray", pathLength);
              }
              return [pathLength, 0];
            }}
          >
            <path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
          </Anime>
        </svg>
      </Anime>
    );
  }
}

export class TronWatchIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        width="202px"
        height="207px"
        viewBox="0 0 202 207"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Splash_Screen"
            transform="translate(-59.000000, -148.000000)"
            fill="#FFFFFF"
          >
            <g transform="translate(59.000000, 148.000000)">
              <path
                d="M145.300029,27.4527165 C145.159357,27.3442697 145.018684,27.2358229 144.842844,27.1273762 C144.139482,26.5851423 143.330616,26.0067595 142.345909,25.6814192 C125.254214,21.415846 107.951511,17.077975 91.2114967,12.8846997 C76.0188791,9.08906254 60.8614295,5.2934254 45.6688119,1.49778826 C45.2819628,1.38934149 44.8951138,1.28089471 44.4730966,1.17244794 C43.1015409,0.77480976 41.5189765,0.341022658 39.8309079,0.557916209 C39.3385546,0.630214059 38.9165374,0.810958685 38.5296883,1.06400116 L38.1076712,1.42549041 C37.4394773,2.07617106 37.0877964,2.90759634 36.9119559,3.37753237 L36.8064516,5.32957432 C46.4776781,33.2365445 56.3247451,61.2881104 65.8201311,88.4359532 C73.1350952,109.330032 80.731404,130.983238 88.1518724,152.238806 C88.6090576,153.684763 89.9102772,154.624635 91.5280096,154.769231 C93.3919187,154.769231 94.7283064,154.010103 95.3965002,152.78104 L123.249633,111.029031 C130.037075,100.871183 136.824518,90.6771865 143.61196,80.5193386 C146.39024,76.3622122 149.16852,72.1689369 151.946799,68.0118105 C156.518652,61.1435147 161.231177,54.0583254 165.908533,47.1538807 L166.15471,46.7923914 C166.260214,45.093392 166.295383,42.4906693 164.255633,41.1170102 C158.171552,36.7429903 151.665454,32.0797789 145.300029,27.4527165 Z M111.204032,67.0793522 C115.177118,62.7850742 119.185996,58.4547099 123.159082,54.1604318 C128.134387,48.7474764 133.324453,43.1540891 138.407139,37.6689609 L138.51452,37.5607018 C138.944043,36.9833198 139.480946,36.4420243 140.053643,35.8646424 C140.447372,35.4676923 140.876895,35.0707422 141.270624,34.6016194 C143.919348,36.4420243 146.603865,38.3185155 149.181001,40.1589204 C151.042266,41.4941161 152.939325,42.8293117 154.872177,44.1645074 C146.997594,48.2061808 139.12301,52.3561134 131.498982,56.3977868 C124.841379,59.8981646 118.040603,63.5068016 111.204032,67.0793522 Z M99.9366175,71.9510121 C89.9412215,59.5099608 79.7353961,46.8891255 69.8452148,34.6997718 C65.3560544,29.1624252 60.8318226,23.5891219 56.3426622,18.0517753 C55.2905153,16.8292443 54.3085115,15.5347996 53.3265076,14.3122686 C52.6952195,13.4852623 52.0288597,12.6942128 51.3625,11.8672065 C55.4308015,12.9459103 59.5341746,13.9527006 63.5674046,14.9235341 C67.1096327,15.7864972 70.792147,16.6854171 74.4045182,17.6202938 C94.7460259,22.690202 115.122605,27.7601102 135.464113,32.8300184 C128.695301,40.2371183 121.891417,47.7520886 115.297963,55.0153614 C110.282729,60.5886647 105.092138,66.3057952 99.9366175,71.9510121 Z M99.0577496,112.542076 C99.3766892,109.487542 99.6956288,106.361136 100.014568,103.378473 C100.510697,98.5990258 101.042263,93.6398998 101.467515,88.7885808 L101.573829,87.9261241 C101.928206,84.8356542 102.282583,81.6373773 102.49521,78.4391004 C102.885025,78.2234862 103.310277,78.007872 103.770968,77.8281935 C104.302534,77.5766436 104.8341,77.3610295 105.365666,77.0376082 C113.551782,72.689389 121.737898,68.3411698 129.959452,64.0288863 C138.145568,59.7166027 146.54431,55.2605764 154.872177,50.8404858 C147.288503,61.9805516 139.66939,73.2284244 132.298342,84.1888117 C125.954988,93.5680284 119.434445,103.234731 112.949341,112.75769 C110.397824,116.566874 107.739994,120.447929 105.223915,124.185241 C102.388896,128.353782 99.4830024,132.63013 96.6479839,136.906478 C97.0023612,132.594194 97.427614,128.245975 97.8883045,124.005563 C98.2781195,120.232315 98.7033723,116.35126 99.0577496,112.542076 Z M46.5104839,15.1149798 C56.1591831,26.9448578 65.8793541,38.8473119 75.3493737,50.3868862 C80.2451952,56.3744012 85.1410167,62.3256282 90.0368381,68.3494312 C91.001708,69.4743582 91.966578,70.6718612 92.895712,71.8330762 C94.1107333,73.320883 95.3257547,74.8812657 96.6479839,76.3690724 C96.2191528,80.1067333 95.8617936,83.8806822 95.4686984,87.5094791 C95.218547,90.049637 94.9683955,92.5897949 94.6825081,95.1662407 C94.5753003,96.8354873 94.3608848,98.4684459 94.1822052,100.065117 C93.9320537,102.278683 93.360279,107.286423 93.360279,107.286423 C92.6812964,114.870608 91.8951061,122.273354 91.1446517,129.458372 C90.8230284,132.433985 90.537141,135.482175 90.2155177,138.530364 C90.0368381,137.986045 89.8224226,137.441725 89.643743,136.933694 C89.1077041,135.482175 88.5716653,133.95808 88.0713623,132.470273 L84.2476186,121.692746 C72.1331407,87.4731911 60.0186628,53.2899238 47.9041849,19.0340805 C47.4396179,17.7277136 46.9393149,16.3850587 46.5104839,15.1149798 Z"
                id="Logo_Tron"
                fill-rule="nonzero"
              />
              <path
                d="M10.7382269,189.58043 L10.7382269,206.688792 L6.00612692,206.688792 L6.00612692,189.58043 L0,189.58043 L0,185.485344 L16.7443538,185.485344 L16.7443538,189.58043 L10.7382269,189.58043 Z M37.4017904,192.522826 C37.4017904,195.920248 36.0569976,198.114383 33.3673718,199.105298 L38.7364852,206.688792 L32.9123622,206.688792 L28.2105961,199.924315 L24.9345269,199.924315 L24.9345269,206.688792 L20.2024269,206.688792 L20.2024269,185.485344 L28.2409301,185.485344 C31.5372385,185.485344 33.888098,186.041461 35.2935792,187.153712 C36.6990603,188.265963 37.4017904,190.05565 37.4017904,192.522826 Z M28.3926,195.829229 C30.01042,195.829229 31.1125434,195.566337 31.6990032,195.040546 C32.285463,194.514754 32.5786884,193.680578 32.5786884,192.537993 C32.5786884,191.395407 32.2753517,190.611787 31.6686692,190.18711 C31.0619867,189.762432 30.0003082,189.550096 28.4836019,189.550096 L24.9345269,189.550096 L24.9345269,195.829229 L28.3926,195.829229 Z M58.2715647,195.980899 C58.2715647,194.07996 57.6648913,192.462164 56.4515263,191.127463 C55.2381612,189.792761 53.7467557,189.125421 51.977265,189.125421 C50.2077744,189.125421 48.7163689,189.792761 47.5030038,191.127463 C46.2896388,192.462164 45.6829654,194.074905 45.6829654,195.965732 C45.6829654,197.856559 46.2896388,199.464243 47.5030038,200.788834 C48.7163689,202.113424 50.2077744,202.775709 51.977265,202.775709 C53.7467557,202.775709 55.2381612,202.113424 56.4515263,200.788834 C57.6648913,199.464243 58.2715647,197.861615 58.2715647,195.980899 Z M59.8792654,203.77673 C57.7356538,205.859673 55.0966244,206.901129 51.9620981,206.901129 C48.8275717,206.901129 46.1885423,205.854618 44.0449307,203.761563 C41.9013192,201.668508 40.8295295,199.064868 40.8295295,195.950565 C40.8295295,192.836261 41.9013192,190.232621 44.0449307,188.139566 C46.1885423,186.046512 48.8275717,185 51.9620981,185 C55.0966244,185 57.7356538,186.046512 59.8792654,188.139566 C62.0228769,190.232621 63.0946666,192.836261 63.0946666,195.950565 C63.0946666,199.064868 62.0228769,201.673564 59.8792654,203.77673 Z M81.9320647,185.485344 L86.6641647,185.485344 L86.6641647,206.688792 L81.9320647,206.688792 L71.8308512,193.402511 L71.8308512,206.688792 L67.0987513,206.688792 L67.0987513,185.485344 L71.5275115,185.485344 L81.9320647,199.135632 L81.9320647,185.485344 Z M98.4944147,197.679601 L102.255828,185.485344 L107.200265,185.485344 L110.931344,197.679601 L115.147767,185.485344 L120.274208,185.485344 L112.872719,206.688792 L109.353978,206.688792 L104.712879,191.94648 L100.102115,206.688792 L96.5833743,206.688792 L89.1818846,185.485344 L94.3083262,185.485344 L98.4944147,197.679601 Z M136.77589,206.688792 L134.804182,202.108362 L125.916328,202.108362 L123.944619,206.688792 L118.909179,206.688792 L128.07004,185.485344 L132.65047,185.485344 L141.81133,206.688792 L136.77589,206.688792 Z M130.375422,191.79481 L127.706032,197.952607 L133.014478,197.952607 L130.375422,191.79481 Z M151.700206,189.58043 L151.700206,206.688792 L146.968106,206.688792 L146.968106,189.58043 L140.961979,189.58043 L140.961979,185.485344 L157.706333,185.485344 L157.706333,189.58043 L151.700206,189.58043 Z M170.901611,202.502703 C173.227228,202.502703 175.128138,201.582582 176.604399,199.742312 L179.637796,202.866711 C177.231289,205.576559 174.395091,206.931463 171.129116,206.931463 C167.863142,206.931463 165.173557,205.900119 163.060279,203.837398 C160.947002,201.774677 159.890379,199.171037 159.890379,196.0264 C159.890379,192.881762 160.967224,190.257899 163.120947,188.154733 C165.27467,186.051567 167.908644,185 171.022947,185 C174.50126,185 177.413293,186.32457 179.759132,188.973751 L176.816736,192.310488 C175.320253,190.449995 173.459788,189.519762 171.235285,189.519762 C169.455683,189.519762 167.933944,190.101158 166.670022,191.263966 C165.4061,192.426774 164.774149,193.994014 164.774149,195.965732 C164.774149,197.93745 165.370711,199.519856 166.563853,200.712999 C167.756995,201.906141 169.2029,202.502703 170.901611,202.502703 Z M196.53382,185.485344 L201.26592,185.485344 L201.26592,206.688792 L196.53382,206.688792 L196.53382,198.346949 L188.100975,198.346949 L188.100975,206.688792 L183.368875,206.688792 L183.368875,185.485344 L188.100975,185.485344 L188.100975,194.342864 L196.53382,194.342864 L196.53382,185.485344 Z"
                id="TRONWATCH"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}