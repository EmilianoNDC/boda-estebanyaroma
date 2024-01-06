import React from "react";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import timg1 from '/public/images/team/img-1.jpg'
import timg2 from '/public/images/team/img-2.jpg'
import timg3 from '/public/images/team/img-3.jpg'
import timg4 from '/public/images/team/img-4.jpg'
import Image from "next/image";


const Brides = [
  {
    id: '1',
    tImg: timg1,
    name: 'Jenny Wilson',
    title: 'Bridesmaid',
    animation:'1000',
    viewBox: '0 0 265 236',
    svgPath: 'M151.285 236C133.89 236 115.923 232.537 98.1199 225.675C71.5047 215.399 46.7662 197.903 28.4734 176.424C-1.79698 140.848 -8.47116 96.8976 11.0455 61.7114C28.4897 30.2812 62.954 7.30616 100.992 1.76157C133.694 -3.00254 166.95 1.97295 194.643 15.7612C224.44 30.6064 246.225 54.5083 257.647 84.8978C268.434 113.596 267.308 146.181 254.563 174.31C251.642 180.749 247.905 186.944 243.45 192.716C242.896 193.432 241.884 193.562 241.166 193.009C240.448 192.456 240.317 191.448 240.872 190.733C245.18 185.156 248.787 179.172 251.61 172.977C264.012 145.628 265.105 113.938 254.612 86.0523C232.893 28.3463 169.92 -4.98624 101.465 4.98101C64.4063 10.3793 30.8559 32.7202 13.9012 63.2886C-4.94641 97.2553 1.59722 139.791 30.9538 174.31C69.5139 219.626 131.54 242.065 181.784 228.894C192.081 226.195 201.937 222.082 211.108 216.683C211.891 216.228 212.886 216.472 213.343 217.252C213.8 218.033 213.539 219.025 212.772 219.48C203.356 225.041 193.206 229.268 182.616 232.049C172.515 234.683 162.006 236 151.285 236ZM228.258 207.984C227.801 207.984 227.344 207.789 227.034 207.432C226.447 206.749 226.512 205.724 227.197 205.139C230.869 201.952 234.312 198.521 237.413 194.944C238 194.261 239.028 194.196 239.714 194.781C240.399 195.367 240.464 196.391 239.877 197.074C236.662 200.781 233.121 204.326 229.335 207.594C229.025 207.854 228.633 207.984 228.258 207.984Z'
  },
  {
    id: '2',
    tImg: timg2,
    name: 'Robert Fox',
    title: 'Groomsmen',
    animation:'1200',
    viewBox: '0 0 261 241',
    svgPath: 'M59.0013 241C58.546 241 58.0744 241 57.619 241C56.7246 241 55.9928 240.252 56.0091 239.358C56.0091 238.463 56.7409 237.748 57.6353 237.748H57.6516C74.4181 237.927 91.7375 235.243 108.488 232.658C113.773 231.845 118.782 231.08 123.677 230.413C163.666 224.982 197.459 216.721 227.008 205.142C250.458 195.97 261.126 174.585 255.532 147.963C254.15 141.361 251.808 134.774 248.588 128.383C247.856 126.936 247.108 125.489 246.344 124.041C245.921 123.244 246.23 122.269 247.027 121.846C247.824 121.423 248.799 121.732 249.222 122.529C250.003 123.992 250.751 125.456 251.499 126.92C254.849 133.571 257.288 140.417 258.72 147.296C264.672 175.609 253.255 198.36 228.195 208.167C198.402 219.827 164.349 228.153 124.116 233.633C119.253 234.3 114.261 235.064 108.992 235.878C92.5669 238.398 75.6052 241 59.0013 241ZM42.43 239.959C42.3649 239.959 42.2836 239.959 42.2023 239.943C37.3399 239.293 32.7213 238.301 28.4606 237.016C18.5731 234.024 11.2388 227.974 6.65277 219.014C-8.73144 188.993 9.90524 134.579 18.8658 108.429L19.3862 106.901C20.2969 104.234 21.2401 101.42 22.2159 98.4931C36.3641 56.2109 60.0259 -14.5467 117.66 2.67517C160.3 15.4086 203.086 50.4378 235.09 98.7533C238.635 104.104 242.018 109.6 245.124 115.064C245.563 115.845 245.303 116.837 244.522 117.276C243.742 117.715 242.75 117.455 242.311 116.674C239.237 111.259 235.887 105.827 232.391 100.542C200.809 52.8446 158.657 18.3033 116.749 5.78129C62.1237 -10.5299 39.9581 55.7068 25.3057 99.5339C24.3137 102.477 23.3705 105.307 22.4598 107.974L21.9394 109.503C13.8245 133.213 -5.2025 188.766 9.54747 217.55C13.7106 225.681 20.3945 231.194 29.4038 233.926C33.5019 235.162 37.9578 236.122 42.6414 236.74C43.5358 236.853 44.1538 237.683 44.04 238.577C43.9261 239.374 43.2268 239.959 42.43 239.959Z'
  },
  {
    id: '3',
    tImg: timg3,
    name: 'Annette Black',
    title: 'Bridesmaids',
    animation:'1400',
    viewBox: '0 0 246 254',
    svgPath: 'M131.937 252.602C121.041 250.837 110.559 246.734 102.019 241.452C81.2753 228.594 65.364 208.806 49.9852 189.654C47.1118 186.08 44.2666 182.545 41.4244 179.096C32.5393 168.313 22.4797 156.086 14.6852 143.024C14.2133 142.226 14.4678 141.185 15.2683 140.696C16.0662 140.224 17.107 140.479 17.5957 141.279C25.2526 154.131 35.2254 166.258 44.0236 176.941C46.8797 180.409 49.7223 183.961 52.6124 187.538C67.8202 206.473 83.5437 226.041 103.79 238.579C123.536 250.812 154.089 256.448 174.523 239.937C177.033 237.905 179.512 235.541 181.897 232.904C182.524 232.216 183.599 232.15 184.288 232.776C184.976 233.403 185.043 234.479 184.416 235.167C181.925 237.924 179.322 240.422 176.656 242.567C163.906 252.885 147.502 255.123 131.937 252.602ZM188.711 228.478C188.46 228.437 188.217 228.346 187.988 228.172C187.236 227.62 187.064 226.562 187.615 225.81C200.423 208.132 208.397 184.777 214.877 164.288C218.16 153.879 221.191 143.12 224.096 132.718C226.723 123.388 229.419 113.742 232.339 104.305C239.682 80.5034 249.738 47.901 233.115 24.3398C231.089 21.4697 228.747 18.8575 226.147 16.5641C213.624 5.55255 196.955 3.59094 185.188 3.91772C184.254 3.95543 183.465 3.20922 183.446 2.2616C183.426 1.33071 184.155 0.538559 185.103 0.520304C202.853 0.0463956 217.829 4.72227 228.399 14.009C231.195 16.4715 233.711 19.2836 235.891 22.3677C253.478 47.2875 243.136 80.8054 235.583 105.277C232.688 114.667 229.978 124.293 227.369 133.609C224.445 144.025 221.409 154.817 218.117 165.276C211.561 186.028 203.471 209.674 190.372 227.768C189.971 228.338 189.314 228.575 188.711 228.478ZM9.82859 132.395C9.29302 132.309 8.81485 131.973 8.55874 131.434C6.9008 127.885 5.47128 124.304 4.27337 120.778C0.928071 110.892 -3.1574 92.11 7.02199 77.4076C13.8369 67.5706 24.7285 62.3615 35.2669 57.3185C38.0788 55.9705 40.7405 54.7013 43.3321 53.3348C81.061 33.5454 121.614 13.8183 162.414 3.69817C168.481 2.19043 174.583 1.20376 180.546 0.761268C181.466 0.704118 182.3 1.3888 182.354 2.32511C182.425 3.26413 181.727 4.07844 180.79 4.13288C175.02 4.55498 169.112 5.50452 163.223 6.97243C122.766 16.9934 82.4353 36.6192 44.8733 56.3326C42.226 57.7244 39.4141 59.0724 36.6968 60.367C26.5673 65.2185 16.0872 70.2195 9.78469 79.3322C0.4722 92.8182 4.33764 110.414 7.47114 119.698C8.61838 123.113 10.014 126.586 11.6212 130.023C12.018 130.861 11.6491 131.866 10.8119 132.263C10.4781 132.415 10.1466 132.447 9.82859 132.395Z'
  },
  {
    id: '4',
    tImg: timg4,
    name: 'Jenefer Abram',
    title: 'Groomsmen',
    animation:'1600',
    viewBox: '0 0 257 255',
    svgPath: 'M30.7743 183.077C30.4007 182.817 30.0138 182.547 29.6402 182.287C28.9064 181.775 28.7337 180.743 29.2585 180.019C29.7698 179.285 30.7794 179.116 31.5132 179.628L31.5265 179.637C45.18 189.37 60.9235 197.071 76.1443 204.526C80.9454 206.881 85.4918 209.118 89.889 211.369C125.803 229.777 158.251 242.32 189.114 249.715C213.597 255.598 234.577 244.152 245.208 219.113C247.849 212.905 249.693 206.163 250.705 199.078C250.932 197.473 251.146 195.857 251.347 194.233C251.455 193.337 252.267 192.714 253.162 192.822C254.058 192.931 254.682 193.742 254.573 194.638C254.377 196.285 254.153 197.913 253.93 199.542C252.876 206.914 250.963 213.926 248.204 220.388C236.899 247.02 214.525 259.158 188.359 252.875C157.249 245.408 124.55 232.769 88.4082 214.262C84.0377 212.029 79.5047 209.802 74.7169 207.456C59.8002 200.133 44.3967 192.57 30.7743 183.077ZM17.7738 172.749C17.7204 172.711 17.6537 172.665 17.5963 172.605C13.9789 169.291 10.7569 165.837 7.99578 162.347C1.59458 154.239 -0.96387 145.082 0.396814 135.108C4.93918 101.683 51.3402 67.6956 73.6429 51.3646L74.9438 50.408C77.2158 48.7406 79.5982 46.9717 82.0724 45.128C117.855 18.5276 177.723 -25.9955 215.161 21.0858C242.864 55.9119 257.939 109.114 256.572 167.052C256.422 173.468 256.054 179.912 255.479 186.171C255.392 187.062 254.612 187.727 253.72 187.641C252.829 187.555 252.164 186.775 252.25 185.883C252.824 179.683 253.181 173.311 253.335 166.976C254.695 109.787 239.861 57.3477 212.638 23.1134C177.148 -21.5006 121.092 20.1689 84.0123 47.7485C81.5155 49.5962 79.1238 51.3785 76.8518 53.0459L75.5509 54.0025C55.3367 68.8157 7.96459 103.514 3.60853 135.563C2.37514 144.614 4.70676 152.958 10.5362 160.351C13.1918 163.708 16.299 167.043 19.7882 170.228C20.4569 170.833 20.4897 171.866 19.885 172.535C19.336 173.124 18.4275 173.204 17.7738 172.749Z'
  }
]

const BrideGrooms = (props) => {
  return (
    <section className={`wpo-team-section section-padding ${props.brClass}`}>
      <div className="container">
        <SectionTitle subTitle={'Important Persons'} MainTitle={'Bridesmaids & Groomsmen'} />
        <div className="wpo-team-wrap scene-2" id="scene-2">
          <div className="row">
            {Brides.slice(0, 8).map((Bride, tm) => (
              <div className="col col-lg-3 col-md-6 col-sm-6 col-12 layer" key={tm}>
                <Slide direction="up" duration={Bride.animation} triggerOnce="true">
                  <div className="wpo-team-item">
                    <div className="wpo-team-img-wrap">
                      <div className="wpo-team-img">
                        <Image src={Bride.tImg} alt="" />
                      </div>
                      <div className="team-shape">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox={Bride.viewBox} fill="none">
                          <path
                            d={Bride.svgPath}
                            fill="" />
                        </svg>
                      </div>
                    </div>
                    <div className="wpo-team-text">
                      <h3>{Bride.name}</h3>
                      <span>{Bride.title}</span>
                    </div>
                  </div>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default BrideGrooms;