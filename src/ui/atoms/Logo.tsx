import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Navigate to main page">
      <svg viewBox="0 0 238 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.0804 12.2254C10.0356 12.2254 9.09159 12.407 8.24845 12.7702C7.40529 13.1153 6.69043 13.6329 6.10387 14.3231C5.51732 14.9951 5.06825 15.8215 4.75664 16.8022C4.44503 17.7648 4.28923 18.8546 4.28923 20.0714C4.28923 21.6697 4.53668 23.0591 5.03158 24.2396C5.54481 25.4202 6.29634 26.3282 7.28614 26.964C8.29427 27.5997 9.54989 27.9175 11.0529 27.9175C11.9144 27.9175 12.7301 27.8448 13.4999 27.6995C14.2698 27.5542 15.0213 27.3726 15.7545 27.1547V29.2796C15.0213 29.5521 14.2606 29.7519 13.4724 29.879C12.7026 30.0061 11.777 30.0697 10.6955 30.0697C8.69756 30.0697 7.02952 29.661 5.69146 28.8437C4.35339 28.0264 3.34525 26.8641 2.66705 25.3566C2.00718 23.8491 1.67725 22.0783 1.67725 20.0442C1.67725 18.573 1.87888 17.229 2.28213 16.0122C2.70371 14.7953 3.30859 13.7419 4.09677 12.852C4.90328 11.962 5.89309 11.281 7.06618 10.8087C8.23928 10.3183 9.58649 10.0731 11.1079 10.0731C12.116 10.0731 13.0875 10.173 14.0223 10.3728C14.9571 10.5726 15.7912 10.8541 16.5243 11.2174L15.5345 13.2878C14.9296 13.0154 14.2515 12.7702 13.4999 12.5523C12.7668 12.3343 11.9602 12.2254 11.0804 12.2254ZM39.3807 20.0442C39.3807 21.5517 39.1883 22.9228 38.8034 24.1579C38.4184 25.3747 37.841 26.4282 37.0712 27.3181C36.3196 28.208 35.3756 28.8891 34.2393 29.3614C33.1211 29.8336 31.8197 30.0697 30.335 30.0697C28.7953 30.0697 27.4572 29.8336 26.3208 29.3614C25.1843 28.871 24.2403 28.1899 23.4889 27.3181C22.7373 26.4282 22.1782 25.3657 21.8117 24.1307C21.4451 22.8956 21.2618 21.5244 21.2618 20.0169C21.2618 18.0191 21.5917 16.2755 22.2516 14.7862C22.9115 13.297 23.9104 12.1345 25.2485 11.2991C26.6049 10.4637 28.3095 10.0459 30.3625 10.0459C32.3237 10.0459 33.9734 10.4637 35.3115 11.2991C36.6496 12.1164 37.6577 13.2787 38.3359 14.7862C39.0324 16.2755 39.3807 18.0282 39.3807 20.0442ZM23.8738 20.0442C23.8738 21.6788 24.1029 23.0863 24.5612 24.2669C25.0194 25.4474 25.725 26.3555 26.6782 26.9912C27.6497 27.6269 28.8686 27.9447 30.335 27.9447C31.8197 27.9447 33.0295 27.6269 33.9643 26.9912C34.9174 26.3555 35.6231 25.4474 36.0814 24.2669C36.5396 23.0863 36.7688 21.6788 36.7688 20.0442C36.7688 17.5923 36.2555 15.6761 35.2291 14.2958C34.2026 12.8973 32.5804 12.1981 30.3625 12.1981C28.8778 12.1981 27.6497 12.5159 26.6782 13.1516C25.725 13.7691 25.0194 14.6681 24.5612 15.8487C24.1029 17.0111 23.8738 18.4096 23.8738 20.0442ZM63.6103 20.0442C63.6103 21.5517 63.4179 22.9228 63.033 24.1579C62.648 25.3747 62.0706 26.4282 61.3008 27.3181C60.5492 28.208 59.6052 28.8891 58.4688 29.3614C57.3507 29.8336 56.0493 30.0697 54.5646 30.0697C53.0249 30.0697 51.6868 29.8336 50.5504 29.3614C49.4139 28.871 48.4699 28.1899 47.7185 27.3181C46.9669 26.4282 46.4078 25.3657 46.0413 24.1307C45.6747 22.8956 45.4914 21.5244 45.4914 20.0169C45.4914 18.0191 45.8213 16.2755 46.4812 14.7862C47.1411 13.297 48.14 12.1345 49.4781 11.2991C50.8345 10.4637 52.5391 10.0459 54.5921 10.0459C56.5533 10.0459 58.203 10.4637 59.5411 11.2991C60.8792 12.1164 61.8873 13.2787 62.5655 14.7862C63.262 16.2755 63.6103 18.0282 63.6103 20.0442ZM48.1034 20.0442C48.1034 21.6788 48.3325 23.0863 48.7908 24.2669C49.249 25.4474 49.9546 26.3555 50.9078 26.9912C51.8793 27.6269 53.0982 27.9447 54.5646 27.9447C56.0493 27.9447 57.2591 27.6269 58.1939 26.9912C59.147 26.3555 59.8527 25.4474 60.311 24.2669C60.7692 23.0863 60.9984 21.6788 60.9984 20.0442C60.9984 17.5923 60.4851 15.6761 59.4587 14.2958C58.4322 12.8973 56.81 12.1981 54.5921 12.1981C53.1074 12.1981 51.8793 12.5159 50.9078 13.1516C49.9546 13.7691 49.249 14.6681 48.7908 15.8487C48.3325 17.0111 48.1034 18.4096 48.1034 20.0442ZM70.7107 29.7972V10.3456H73.1852V27.6178H81.7635V29.7972H70.7107Z"
          fill="black"
        />
        <path
          d="M155.008 19.8808C155.008 22.0603 154.595 23.8856 153.77 25.3567C152.964 26.8278 151.8 27.9357 150.279 28.6804C148.757 29.4251 146.915 29.7973 144.752 29.7973H139.281V10.3457H145.33C147.309 10.3457 149.023 10.7089 150.471 11.4354C151.919 12.1619 153.038 13.2335 153.825 14.6501C154.613 16.0486 155.008 17.7922 155.008 19.8808ZM152.396 19.9625C152.396 18.2371 152.103 16.8205 151.516 15.7126C150.948 14.6047 150.104 13.7874 148.986 13.2607C147.887 12.7158 146.549 12.4434 144.972 12.4434H141.755V27.6996H144.422C147.08 27.6996 149.069 27.0549 150.389 25.7653C151.726 24.4577 152.396 22.5234 152.396 19.9625ZM170.335 29.7973H159.365V10.3457H170.335V12.4979H161.839V18.5731H169.84V20.6981H161.839V27.6451H170.335V29.7973ZM185.778 24.5939C185.778 25.7562 185.494 26.7461 184.925 27.5634C184.357 28.3626 183.542 28.98 182.478 29.4159C181.433 29.8518 180.196 30.0698 178.766 30.0698C178.034 30.0698 177.328 30.0334 176.649 29.9608C175.989 29.8882 175.385 29.7882 174.835 29.6611C174.285 29.5158 173.799 29.3433 173.377 29.1435V26.8006C174.037 27.0912 174.854 27.3546 175.825 27.5906C176.814 27.8267 177.832 27.9448 178.876 27.9448C179.848 27.9448 180.664 27.8177 181.323 27.5634C181.983 27.3091 182.478 26.9459 182.808 26.4737C183.138 26.0014 183.303 25.4475 183.303 24.8118C183.303 24.1761 183.166 23.6404 182.891 23.2045C182.616 22.7686 182.14 22.3691 181.461 22.0058C180.801 21.6244 179.876 21.2248 178.684 20.8071C177.841 20.4983 177.099 20.1714 176.457 19.8263C175.834 19.4631 175.312 19.0544 174.89 18.6004C174.469 18.1464 174.147 17.6287 173.927 17.0475C173.726 16.4663 173.625 15.7943 173.625 15.0315C173.625 13.9963 173.891 13.1154 174.422 12.3889C174.954 11.6442 175.687 11.0721 176.622 10.6726C177.576 10.2731 178.666 10.0732 179.894 10.0732C180.975 10.0732 181.965 10.1731 182.863 10.3729C183.762 10.5727 184.577 10.8361 185.31 11.163L184.54 13.2607C183.862 12.9701 183.12 12.7249 182.313 12.5251C181.525 12.3253 180.7 12.2255 179.839 12.2255C179.014 12.2255 178.327 12.3435 177.777 12.5796C177.227 12.8157 176.814 13.1517 176.539 13.5876C176.264 14.0054 176.127 14.4958 176.127 15.0588C176.127 15.7126 176.264 16.2575 176.539 16.6933C176.814 17.1292 177.264 17.5198 177.887 17.8648C178.51 18.2099 179.353 18.5822 180.416 18.9818C181.571 19.3995 182.543 19.8536 183.331 20.3439C184.137 20.8162 184.742 21.3883 185.145 22.0603C185.567 22.7322 185.778 23.5768 185.778 24.5939ZM195.259 29.7973H188.165V28.3807L190.475 27.8631V12.3072L188.165 11.7623V10.3457H195.259V11.7623L192.949 12.3072V27.8631L195.259 28.3807V29.7973ZM207.573 19.5266H214.364V29.0618C213.3 29.4068 212.228 29.6611 211.147 29.8246C210.066 29.9881 208.838 30.0698 207.463 30.0698C205.428 30.0698 203.714 29.6702 202.322 28.8711C200.928 28.0538 199.865 26.9005 199.132 25.4112C198.417 23.9037 198.06 22.1239 198.06 20.0715C198.06 18.0374 198.463 16.2756 199.27 14.7863C200.076 13.2971 201.23 12.1437 202.734 11.3264C204.255 10.491 206.088 10.0732 208.233 10.0732C209.333 10.0732 210.368 10.1731 211.34 10.3729C212.33 10.5727 213.245 10.8542 214.089 11.2175L213.154 13.3424C212.458 13.0336 211.67 12.7703 210.79 12.5524C209.928 12.3344 209.03 12.2255 208.095 12.2255C206.537 12.2255 205.199 12.5433 204.081 13.179C202.963 13.8147 202.11 14.7227 201.524 15.9033C200.937 17.0656 200.644 18.4551 200.644 20.0715C200.644 21.6153 200.892 22.9865 201.387 24.1852C201.9 25.3658 202.697 26.2921 203.779 26.9641C204.86 27.6179 206.281 27.9448 208.04 27.9448C208.626 27.9448 209.14 27.9267 209.58 27.8903C210.038 27.8358 210.451 27.7722 210.817 27.6996C211.202 27.627 211.56 27.5543 211.89 27.4817V21.7061H207.573V19.5266ZM234.615 29.7973H231.728L221.225 13.6421H221.115C221.133 13.969 221.151 14.3323 221.17 14.7318C221.206 15.1314 221.234 15.5673 221.252 16.0395C221.27 16.4935 221.289 16.9658 221.307 17.4562C221.325 17.9465 221.335 18.4369 221.335 18.9273V29.7973H219.053V10.3457H221.912L232.388 26.4464H232.498C232.479 26.2285 232.461 25.9288 232.443 25.5474C232.424 25.1479 232.406 24.712 232.388 24.2397C232.369 23.7493 232.351 23.2499 232.333 22.7413C232.314 22.2328 232.305 21.7606 232.305 21.3247V10.3457H234.615V29.7973Z"
          fill="black"
        />
        <path d="M138.332 0H85.9204V40.0135H138.332V0Z" fill="#161616" />
        <path
          d="M102.624 29.7973L100.259 23.7766H92.4782L90.1412 29.7973H87.6392L95.3102 10.2639H97.5372L105.181 29.7973H102.624ZM97.3173 15.7126C97.2623 15.5672 97.1703 15.3039 97.0423 14.9225C96.9143 14.5411 96.7854 14.1506 96.6574 13.7511C96.5474 13.3333 96.4555 13.0155 96.3824 12.7975C96.2905 13.1608 96.19 13.5331 96.08 13.9145C95.9881 14.2778 95.8875 14.6137 95.7776 14.9225C95.6856 15.2313 95.6031 15.4946 95.5301 15.7126L93.303 21.5971H99.5168L97.3173 15.7126ZM113.282 10.3456C114.914 10.3456 116.252 10.5545 117.297 10.9722C118.36 11.3718 119.148 11.9802 119.662 12.7975C120.175 13.6148 120.432 14.641 120.432 15.876C120.432 16.9113 120.239 17.7739 119.854 18.4641C119.469 19.1543 118.974 19.7082 118.37 20.126C117.783 20.5255 117.16 20.8434 116.5 21.0795L121.889 29.7973H119.002L114.245 21.7606H110.341V29.7973H107.867V10.3456H113.282ZM113.146 12.4706H110.341V19.6901H113.282C114.346 19.6901 115.216 19.5539 115.895 19.2814C116.573 18.9909 117.068 18.5731 117.38 18.0282C117.71 17.4834 117.875 16.8023 117.875 15.985C117.875 15.1313 117.7 14.4503 117.352 13.9418C117.022 13.4332 116.508 13.0609 115.813 12.8248C115.116 12.5887 114.226 12.4706 113.146 12.4706ZM131.184 29.7973H128.709V12.4979H122.578V10.3456H137.288V12.4979H131.184V29.7973Z"
          fill="white"
        />
        <path
          d="M8.35165 57.8918L7.16938 54.8815H3.2789L2.11038 57.8918H0.859375L4.69487 48.1251H5.8084L9.63015 57.8918H8.35165ZM5.69842 50.8495C5.67093 50.7768 5.62511 50.6451 5.56095 50.4544C5.49679 50.2637 5.43264 50.0685 5.36849 49.8687C5.3135 49.6599 5.26768 49.5009 5.23101 49.3919C5.18519 49.5735 5.13478 49.7597 5.07979 49.9504C5.03397 50.132 4.98356 50.3001 4.92857 50.4544C4.88275 50.6088 4.84151 50.7405 4.80485 50.8495L3.69132 53.7917H6.7982L5.69842 50.8495ZM26.1912 48.166C27.0068 48.166 27.6759 48.2705 28.1983 48.4793C28.7298 48.6791 29.1239 48.9833 29.3805 49.3919C29.6371 49.8006 29.7655 50.3137 29.7655 50.9312C29.7655 51.4488 29.6692 51.8802 29.4768 52.2252C29.2843 52.5703 29.0369 52.8473 28.7344 53.0562C28.4411 53.256 28.1295 53.4148 27.7996 53.5329L30.4941 57.8918H29.0506L26.6723 53.8735H24.7202V57.8918H23.4829V48.166H26.1912ZM26.1224 49.2285H24.7202V52.8382H26.1912C26.7227 52.8382 27.158 52.7701 27.4972 52.6339C27.8362 52.4886 28.0837 52.2797 28.2395 52.0073C28.4045 51.7349 28.487 51.3943 28.487 50.9857C28.487 50.5589 28.3998 50.2184 28.2258 49.9641C28.0608 49.7098 27.8042 49.5237 27.4559 49.4056C27.1076 49.2875 26.6631 49.2285 26.1224 49.2285ZM48.7514 49.1059C48.229 49.1059 47.757 49.1967 47.3354 49.3783C46.9138 49.5509 46.5564 49.8097 46.2632 50.1548C45.9698 50.4908 45.7453 50.9039 45.5895 51.3943C45.4337 51.8756 45.3558 52.4205 45.3558 53.0289C45.3558 53.8281 45.4796 54.5228 45.727 55.113C45.9836 55.7033 46.3594 56.1574 46.8543 56.4752C47.3583 56.793 47.9861 56.952 48.7377 56.952C49.1684 56.952 49.5763 56.9156 49.9612 56.843C50.3461 56.7704 50.7218 56.6795 51.0885 56.5705V57.633C50.7218 57.7692 50.3415 57.8691 49.9474 57.9327C49.5625 57.9963 49.0997 58.0281 48.559 58.0281C47.56 58.0281 46.7259 57.8237 46.0569 57.4151C45.3879 57.0064 44.8838 56.4252 44.5447 55.6715C44.2148 54.9178 44.0498 54.0324 44.0498 53.0153C44.0498 52.2797 44.1506 51.6078 44.3523 50.9993C44.563 50.3908 44.8655 49.8642 45.2596 49.4192C45.6628 48.9742 46.1577 48.6336 46.7443 48.3976C47.3308 48.1524 48.0044 48.0298 48.7652 48.0298C49.2692 48.0298 49.755 48.0798 50.2224 48.1796C50.6898 48.2795 51.1068 48.4203 51.4734 48.6019L50.9785 49.6371C50.676 49.5009 50.3369 49.3783 49.9612 49.2694C49.5946 49.1604 49.1913 49.1059 48.7514 49.1059ZM73.2469 57.8918H72.0096V53.3558H66.9781V57.8918H65.7408V48.166H66.9781V52.2797H72.0096V48.166H73.2469V57.8918ZM91.204 57.8918H87.6572V57.1835L88.812 56.9247V49.1468L87.6572 48.8743V48.166H91.204V48.8743L90.0492 49.1468V56.9247L91.204 57.1835V57.8918ZM108.716 57.8918H107.479V49.2421H104.413V48.166H111.768V49.2421H108.716V57.8918ZM131.243 57.8918H125.758V48.166H131.243V49.2421H126.995V52.2797H130.996V53.3422H126.995V56.8157H131.243V57.8918ZM150.114 49.1059C149.591 49.1059 149.119 49.1967 148.698 49.3783C148.276 49.5509 147.918 49.8097 147.625 50.1548C147.332 50.4908 147.107 50.9039 146.952 51.3943C146.795 51.8756 146.718 52.4205 146.718 53.0289C146.718 53.8281 146.842 54.5228 147.089 55.113C147.345 55.7033 147.722 56.1574 148.217 56.4752C148.72 56.793 149.348 56.952 150.1 56.952C150.53 56.952 150.939 56.9156 151.323 56.843C151.708 56.7704 152.084 56.6795 152.451 56.5705V57.633C152.084 57.7692 151.703 57.8691 151.31 57.9327C150.925 57.9963 150.462 58.0281 149.921 58.0281C148.922 58.0281 148.088 57.8237 147.419 57.4151C146.75 57.0064 146.246 56.4252 145.907 55.6715C145.577 54.9178 145.412 54.0324 145.412 53.0153C145.412 52.2797 145.513 51.6078 145.715 50.9993C145.925 50.3908 146.228 49.8642 146.622 49.4192C147.025 48.9742 147.52 48.6336 148.107 48.3976C148.693 48.1524 149.366 48.0298 150.127 48.0298C150.631 48.0298 151.117 48.0798 151.585 48.1796C152.052 48.2795 152.469 48.4203 152.836 48.6019L152.341 49.6371C152.038 49.5009 151.699 49.3783 151.323 49.2694C150.957 49.1604 150.554 49.1059 150.114 49.1059ZM170.21 57.8918H168.972V49.2421H165.907V48.166H173.262V49.2421H170.21V57.8918ZM194.717 54.4592C194.717 55.1312 194.579 55.7396 194.304 56.2845C194.029 56.8202 193.608 57.2471 193.04 57.5649C192.48 57.8737 191.765 58.0281 190.895 58.0281C189.676 58.0281 188.745 57.7011 188.104 57.0473C187.472 56.3844 187.156 55.5126 187.156 54.4319V48.166H188.393V54.4728C188.393 55.2629 188.604 55.8758 189.025 56.3117C189.456 56.7476 190.102 56.9656 190.964 56.9656C191.559 56.9656 192.04 56.8611 192.407 56.6523C192.783 56.4343 193.058 56.1392 193.232 55.7669C193.406 55.3855 193.493 54.9496 193.493 54.4592V48.166H194.717V54.4592ZM212.526 48.166C213.341 48.166 214.01 48.2705 214.533 48.4793C215.065 48.6791 215.458 48.9833 215.715 49.3919C215.972 49.8006 216.1 50.3137 216.1 50.9312C216.1 51.4488 216.004 51.8802 215.811 52.2252C215.619 52.5703 215.371 52.8473 215.069 53.0562C214.776 53.256 214.464 53.4148 214.134 53.5329L216.828 57.8918H215.385L213.007 53.8735H211.055V57.8918H209.817V48.166H212.526ZM212.457 49.2285H211.055V52.8382H212.526C213.057 52.8382 213.492 52.7701 213.832 52.6339C214.171 52.4886 214.418 52.2797 214.574 52.0073C214.739 51.7349 214.821 51.3943 214.821 50.9857C214.821 50.5589 214.735 50.2184 214.56 49.9641C214.395 49.7098 214.138 49.5237 213.79 49.4056C213.442 49.2875 212.997 49.2285 212.457 49.2285ZM236.364 57.8918H230.879V48.166H236.364V49.2421H232.116V52.2797H236.117V53.3422H232.116V56.8157H236.364V57.8918Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};

export default Logo;
