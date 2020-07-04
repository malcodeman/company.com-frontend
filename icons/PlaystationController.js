function PlaystationController(props) {
  const { size, fill } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 137 146"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M107.610622,35.9142417 C107.091591,31.6324663 104.85305,27.7440943 101.403437,25.1325274 C95.3039422,20.5117927 88.8637232,16.2036733 82.0898416,12.2485633 C75.0052476,8.1108016 67.7282239,4.45776923 60.2993748,1.28068483 C56.2036215,-0.470311933 51.5464676,-0.424649028 47.4877879,1.41064848 C40.1383823,4.73174666 32.9196171,8.54459919 25.8738622,12.8702813 C19.3541997,16.8745667 13.1576075,21.2055176 7.29114703,25.8262523 C3.96334748,28.4483568 1.81660782,32.2735032 1.32229277,36.4674653 C0.45017978,43.8630996 0,51.3834288 0,59.0056213 C0,66.8192468 0.474895533,74.52574 1.39114379,82.0970009 C1.90840919,86.3787763 4.14695021,90.2689045 7.59656312,92.8804714 C13.6978232,97.4994499 20.1362768,101.807569 26.9101584,105.762679 C34.0441839,109.928541 41.3423925,113.576305 48.7571183,116.730558 C52.8475754,118.471017 57.4941369,118.420085 61.5439895,116.5883 C68.8828026,113.270715 76.0927408,109.463131 83.1279032,105.142718 C89.6475657,101.138432 95.8441579,96.8074812 101.710618,92.1849903 C105.038418,89.5628858 107.183392,85.7377394 107.679473,81.5437772 C108.551586,74.1498992 109,66.6295701 109,59.0056213 C109,51.1919958 108.52687,43.4872588 107.610622,35.9142417"
          id="path-1"
        ></path>
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="4"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="7"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.929411765   0 0 0 0 0.125490196   0 0 0 0 0.180392157  0 0 0 0.14 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Desktop"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Careers" transform="translate(-166.000000, -1702.000000)">
          <g id="icon-ps4" transform="translate(180.000000, 1712.000000)">
            <g id="Fill-1">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-2)"
                xlinkHref="#path-1"
              ></use>
              <use
                fill={fill || "#FFFFFF"}
                fillRule="evenodd"
                xlinkHref="#path-1"
              ></use>
            </g>
            <g
              id="joystick"
              transform="translate(23.000000, 39.000000)"
              fill="#ED202E"
            >
              <g id="Shape">
                <path d="M22.5731227,18.0318814 C20.2620312,18.0318814 18.3818545,19.929661 18.3818545,22.2623898 C18.3818545,24.5951186 20.2620312,26.4928983 22.5731227,26.4928983 C24.8842141,26.4928983 26.7643909,24.5951186 26.7643909,22.2623898 C26.7643909,19.929661 24.8842141,18.0318814 22.5731227,18.0318814 L22.5731227,18.0318814 Z M22.5731227,25.1708644 C20.9842391,25.1708644 19.6916258,23.8661492 19.6916258,22.2623898 C19.6916258,20.6586305 20.9842391,19.3539153 22.5731227,19.3539153 C24.1620062,19.3539153 25.4546195,20.6586305 25.4546195,22.2623898 C25.4546195,23.8661492 24.1620062,25.1708644 22.5731227,25.1708644 Z"></path>
                <path d="M40.5169896,18.0318814 C38.2058981,18.0318814 36.3257214,19.929661 36.3257214,22.2623898 C36.3257214,24.5951186 38.2058981,26.4928983 40.5169896,26.4928983 C42.8280811,26.4928983 44.7082578,24.5951186 44.7082578,22.2623898 C44.7082578,19.929661 42.8280811,18.0318814 40.5169896,18.0318814 L40.5169896,18.0318814 Z M40.5169896,25.1708644 C38.928106,25.1708644 37.6354927,23.8661492 37.6354927,22.2623898 C37.6354927,20.6586305 38.928106,19.3539153 40.5169896,19.3539153 C42.1058732,19.3539153 43.3984865,20.6586305 43.3984865,22.2623898 C43.3984865,23.8661492 42.1058732,25.1708644 40.5169896,25.1708644 Z"></path>
                <path d="M11.4771331,10.4668068 L12.9328129,11.6171085 C13.0513472,11.7107085 13.1938503,11.7576407 13.3364844,11.7576407 C13.4791185,11.7576407 13.6216216,11.7108407 13.7401559,11.6171085 L15.1958358,10.4668068 C15.3544491,10.341478 15.4470499,10.1496508 15.4470499,9.94632203 L15.4470499,7.64915593 C15.4470499,7.28414237 15.1539231,6.98813898 14.7921642,6.98813898 L11.8808046,6.98813898 C11.5190457,6.98813898 11.2259189,7.28414237 11.2259189,7.64915593 L11.2259189,9.94632203 C11.2259189,10.1496508 11.3185198,10.3416102 11.4771331,10.4668068 L11.4771331,10.4668068 Z M12.5356902,8.31017288 L14.1374096,8.31017288 L14.1374096,9.62427458 L13.3366154,10.2571322 L12.5358212,9.62427458 L12.5358212,8.31017288 L12.5356902,8.31017288 Z"></path>
                <path d="M15.1959667,15.8137729 L13.7402869,14.6634712 C13.5030873,14.476139 13.1700125,14.476139 12.9329439,14.6634712 L11.477264,15.8137729 C11.3186507,15.9391017 11.2260499,16.1309288 11.2260499,16.3342576 L11.2260499,18.6314237 C11.2260499,18.9964373 11.5191767,19.2924407 11.8809356,19.2924407 L14.7924262,19.2924407 C15.154185,19.2924407 15.4473119,18.9964373 15.4473119,18.6314237 L15.4473119,16.3342576 C15.4471809,16.131061 15.35458,15.9391017 15.1959667,15.8137729 L15.1959667,15.8137729 Z M14.1374096,17.9704068 L12.5356902,17.9704068 L12.5356902,16.6563051 L13.3364844,16.0234475 L14.1372786,16.6563051 L14.1372786,17.9704068 L14.1374096,17.9704068 Z"></path>
                <path d="M14.8454719,13.5476746 L15.985104,15.0171153 C16.1092703,15.1770814 16.2994491,15.2706814 16.5008919,15.2706814 L18.7767505,15.2706814 C19.1385094,15.2706814 19.4316362,14.974678 19.4316362,14.6096644 L19.4316362,11.6709153 C19.4316362,11.3059017 19.1385094,11.0098983 18.7767505,11.0098983 L16.5008919,11.0098983 C16.29958,11.0098983 16.1094012,11.1033661 15.9852349,11.2634644 L14.8456029,12.7327729 C14.6598773,12.972061 14.6598773,13.3083864 14.8454719,13.5476746 L14.8454719,13.5476746 Z M16.8198212,12.3319322 L18.1217339,12.3319322 L18.1217339,13.9486475 L16.8198212,13.9486475 L16.1928337,13.1402237 L16.8198212,12.3319322 L16.8198212,12.3319322 Z"></path>
                <path d="M10.1722079,15.2706814 C10.3735198,15.2706814 10.5636985,15.1770814 10.6879958,15.0171153 L11.8276279,13.5476746 C12.0132225,13.3083864 12.0132225,12.972061 11.8274969,12.7327729 L10.6878649,11.2634644 C10.5638295,11.1033661 10.3736507,11.0098983 10.1722079,11.0098983 L7.89634927,11.0098983 C7.53459044,11.0098983 7.24146362,11.3059017 7.24146362,11.6709153 L7.24146362,14.6096644 C7.24146362,14.974678 7.53459044,15.2706814 7.89634927,15.2706814 L10.1722079,15.2706814 L10.1722079,15.2706814 Z M8.55123493,12.3319322 L9.85314761,12.3319322 L10.4801351,13.1402237 L9.85314761,13.9486475 L8.55123493,13.9486475 L8.55123493,12.3319322 Z"></path>
                <path d="M62.8022245,29.4555763 L59.832842,13.5620847 C59.7976091,10.1275729 58.080368,7.09390169 55.4740541,5.26024068 L55.1814511,2.2113661 C55.0671081,1.01809831 54.0850416,0.118322034 52.897341,0.118322034 L46.4734366,0.118322034 C45.285736,0.118322034 44.3038004,1.01809831 44.1894574,2.2113661 L43.9383742,4.82753898 L19.151869,4.82753898 L18.9007859,2.21149831 C18.7864428,1.01823051 17.8043763,0.118454237 16.6166757,0.118454237 L10.1927713,0.118454237 C9.00507069,0.118454237 8.02313514,1.01823051 7.9087921,2.21149831 L7.61618919,5.25997627 C5.00948233,7.09363729 3.29184823,10.1274407 3.25674636,13.5623492 L0.288673597,29.4555763 C-0.115128898,31.6172339 0.259727651,33.6551492 1.37303326,35.3488068 C2.36557796,36.8588339 3.90220166,38.0055661 5.69960083,38.5776102 C6.52947193,38.8417525 7.3830499,38.9732949 8.22628067,38.9732949 C9.20991892,38.9732949 10.1795426,38.7941593 11.0794865,38.4374746 C12.9541622,37.6943593 14.4197963,36.2421051 15.3173825,34.2371085 L18.1489771,27.9106475 C19.3662786,28.884061 20.9029023,29.4674746 22.5728607,29.4674746 C26.1755177,29.4674746 29.1615343,26.7590237 29.6418274,23.2539153 L33.4476299,23.2539153 C33.9279231,26.7590237 36.9139397,29.4674746 40.5165967,29.4674746 C42.186817,29.4674746 43.7235717,28.8839288 44.9410042,27.9102508 L47.7728607,34.2369763 C48.670185,36.2415763 50.1351642,37.6939627 52.009578,38.437078 C52.9097838,38.7938949 53.8792765,38.9731627 54.8631767,38.9731627 C55.7060146,38.9731627 56.5593306,38.8416203 57.3886778,38.5778746 C59.1863389,38.0060949 60.7232245,36.8594949 61.7162931,35.3493356 C62.8302536,33.655678 63.2057651,31.6176305 62.8022245,29.4555763 Z M57.8708046,13.6691695 C57.8708046,18.2251627 54.1985988,21.9318814 49.6847339,21.9318814 C48.9845301,21.9318814 48.2957214,21.8433051 47.6290478,21.6687966 C47.3592349,18.3473186 44.8495821,15.6565831 41.6304262,15.1454847 C41.5435884,14.6605627 41.4986632,14.1663864 41.4986632,13.6691695 C41.4986632,9.11317627 45.170869,5.40645763 49.6847339,5.40645763 C54.1985988,5.40645763 57.8708046,9.11317627 57.8708046,13.6691695 L57.8708046,13.6691695 Z M23.4535509,15.1140203 C23.5204802,14.6368983 23.5554511,14.1540915 23.5554511,13.6691695 C23.5554511,11.0335627 22.5638233,8.62785763 20.9382661,6.81045763 L42.1511913,6.81045763 C40.5256341,8.62785763 39.5340062,11.0335627 39.5340062,13.6691695 C39.5340062,14.1542237 39.5689771,14.6370305 39.6359064,15.1141525 C36.437052,15.5136712 33.888499,18.0560746 33.4478919,21.2708644 L29.6420894,21.2708644 C29.2016133,18.0559424 26.6526674,15.5132746 23.4535509,15.1140203 Z M46.4734366,2.10137288 L52.897341,2.10137288 C53.0682661,2.10137288 53.2095904,2.2308 53.2260936,2.4025322 L53.3923035,4.13426441 C52.2429792,3.67723729 50.9930644,3.42353898 49.6848649,3.42353898 C48.3771892,3.42353898 47.1277983,3.67723729 45.978736,4.1338678 L46.144815,2.40266441 C46.1613181,2.2308 46.3025114,2.10137288 46.4734366,2.10137288 L46.4734366,2.10137288 Z M9.86414969,2.4024 C9.88065281,2.2308 10.0218462,2.10137288 10.1927713,2.10137288 L16.6166757,2.10137288 C16.7876008,2.10137288 16.9289252,2.2308 16.9454283,2.4025322 L17.1116383,4.134 C15.9624449,3.67723729 14.7127921,3.42340678 13.4048545,3.42340678 C12.0969168,3.42340678 10.847264,3.67710508 9.69807069,4.134 L9.86414969,2.4024 Z M13.4047235,5.40645763 C17.9185884,5.40645763 21.5907942,9.11317627 21.5907942,13.6691695 C21.5907942,14.1665186 21.545869,14.6606949 21.4590312,15.1456169 C18.2402682,15.6571119 15.7310083,18.3474508 15.4610644,21.6686644 C14.7941289,21.8433051 14.1050582,21.9318814 13.4047235,21.9318814 C8.89085863,21.9318814 5.21865281,18.2251627 5.21865281,13.6691695 C5.21865281,9.11317627 8.89085863,5.40645763 13.4047235,5.40645763 L13.4047235,5.40645763 Z M13.5273181,33.4204881 C12.0195094,36.7878407 8.80572349,37.4866678 6.29056965,36.6863085 C3.7754158,35.8858169 1.5412079,33.4532746 2.21940748,29.8229695 L4.36677755,18.3240508 C6.04957173,21.6393153 9.46781289,23.9149322 13.4048545,23.9149322 C14.1402911,23.9149322 14.8660353,23.8352136 15.5743597,23.6792136 C15.76742,24.6520983 16.1553742,25.5542542 16.694869,26.3436407 L13.5273181,33.4204881 Z M22.5731227,27.4844237 C19.7204407,27.4844237 17.399526,25.1417797 17.399526,22.2623898 C17.399526,19.383 19.7204407,17.0403559 22.5731227,17.0403559 C25.4258046,17.0403559 27.7467193,19.383 27.7467193,22.2623898 C27.7467193,25.1417797 25.4258046,27.4844237 22.5731227,27.4844237 Z M40.5169896,27.4844237 C37.6643077,27.4844237 35.3433929,25.1417797 35.3433929,22.2623898 C35.3433929,19.383 37.6643077,17.0403559 40.5169896,17.0403559 C43.3696715,17.0403559 45.6905863,19.383 45.6905863,22.2623898 C45.6905863,25.1417797 43.3696715,27.4844237 40.5169896,27.4844237 Z M56.7984948,36.6865729 C54.282817,37.4866678 51.0704719,36.7870475 49.563711,33.4206203 L46.3957672,26.3429797 C46.935,25.5538576 47.3229543,24.6518339 47.5158836,23.6793458 C48.2240769,23.8353458 48.9495593,23.9149322 49.6847339,23.9149322 C53.6220374,23.9149322 57.0404096,21.6390508 58.7230728,18.323522 L60.8714906,29.8229695 C61.5491663,33.4538034 59.3141726,35.8863458 56.7984948,36.6865729 L56.7984948,36.6865729 Z"></path>
                <path d="M49.6847339,12.3578441 C51.0598628,12.3578441 52.1786694,11.2285627 52.1786694,9.84055932 C52.1786694,8.45255593 51.0598628,7.32327458 49.6847339,7.32327458 C48.309605,7.32327458 47.1907983,8.45255593 47.1907983,9.84055932 C47.1907983,11.2285627 48.309605,12.3578441 49.6847339,12.3578441 Z M49.6847339,8.64544068 C50.3376549,8.64544068 50.8688981,9.18165763 50.8688981,9.84069153 C50.8688981,10.4997254 50.3376549,11.0359424 49.6847339,11.0359424 C49.0318129,11.0359424 48.5005696,10.4997254 48.5005696,9.84069153 C48.5005696,9.18165763 49.0318129,8.64544068 49.6847339,8.64544068 Z"></path>
                <path d="M49.6847339,14.9803627 C48.309605,14.9803627 47.1907983,16.1096441 47.1907983,17.4976475 C47.1907983,18.8856508 48.309605,20.0149322 49.6847339,20.0149322 C51.0598628,20.0149322 52.1786694,18.8856508 52.1786694,17.4976475 C52.1786694,16.1096441 51.0598628,14.9803627 49.6847339,14.9803627 Z M49.6847339,18.6928983 C49.0318129,18.6928983 48.5005696,18.1566814 48.5005696,17.4976475 C48.5005696,16.8386136 49.0318129,16.3023966 49.6847339,16.3023966 C50.3376549,16.3023966 50.8688981,16.8386136 50.8688981,17.4976475 C50.8688981,18.1566814 50.3377859,18.6928983 49.6847339,18.6928983 Z"></path>
                <path d="M53.4777006,11.1518847 C52.1025717,11.1518847 50.983896,12.2811661 50.983896,13.6691695 C50.983896,15.0571729 52.1025717,16.1864542 53.4777006,16.1864542 C54.8528295,16.1864542 55.9716362,15.0571729 55.9716362,13.6691695 C55.9716362,12.2811661 54.8528295,11.1518847 53.4777006,11.1518847 Z M53.4777006,14.8642881 C52.8249106,14.8642881 52.2936674,14.3280712 52.2936674,13.6690373 C52.2936674,13.0100034 52.8249106,12.4737864 53.4777006,12.4737864 C54.1306216,12.4737864 54.6618649,13.0100034 54.6618649,13.6690373 C54.6618649,14.3282034 54.1307526,14.8642881 53.4777006,14.8642881 Z"></path>
                <path d="M48.3857027,13.6691695 C48.3857027,12.2811661 47.266896,11.1518847 45.8917672,11.1518847 C44.5166383,11.1518847 43.3978316,12.2811661 43.3978316,13.6691695 C43.3978316,15.0571729 44.5166383,16.1864542 45.8917672,16.1864542 C47.266896,16.1864542 48.3857027,15.0571729 48.3857027,13.6691695 Z M45.8917672,14.8642881 C45.2388462,14.8642881 44.7076029,14.3280712 44.7076029,13.6690373 C44.7076029,13.0100034 45.2388462,12.4737864 45.8917672,12.4737864 C46.5446881,12.4737864 47.0759314,13.0100034 47.0759314,13.6690373 C47.0759314,14.3282034 46.5448191,14.8642881 45.8917672,14.8642881 Z"></path>
                <path d="M28.4963015,13.1403559 L27.055553,13.1403559 C26.6937942,13.1403559 26.4006674,13.4363593 26.4006674,13.8013729 C26.4006674,14.1663864 26.6937942,14.4623898 27.055553,14.4623898 L28.4963015,14.4623898 C28.8580603,14.4623898 29.1511871,14.1663864 29.1511871,13.8013729 C29.1511871,13.4363593 28.8579293,13.1403559 28.4963015,13.1403559 Z"></path>
                <path d="M34.5938108,14.4623898 L36.0345593,14.4623898 C36.3963181,14.4623898 36.6894449,14.1663864 36.6894449,13.8013729 C36.6894449,13.4363593 36.3963181,13.1403559 36.0345593,13.1403559 L34.5938108,13.1403559 C34.232052,13.1403559 33.9389252,13.4363593 33.9389252,13.8013729 C33.9389252,14.1663864 34.232183,14.4623898 34.5938108,14.4623898 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PlaystationController;
