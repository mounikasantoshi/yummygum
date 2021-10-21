import React from "react";
import { Link } from "react-router-dom";

export default function Success(props) {
  return (
    <div className="rightcontent success">
      <svg width="173" height="42" viewBox="0 0 173 42">
        <path
          fill="rgba(255, 255, 255, .95)"
          fill-opacity=".5"
          fill-rule="evenodd"
          d="M664.697327,96.040808 C660.836301,92.0730463 656.229099,90.1105897 651.977632,89.3735973 C650.242339,94.9953071 647.604694,99.9228728 641.071318,99.9228728 C636.594262,99.9228728 634,97.617629 634,94.4125689 C634,89.5535605 640.715583,86.3570701 648.099253,86.1513977 C648.602488,84.2060804 649.218516,81.4380738 649.452781,79.372781 C647.9344,81.832279 645.218667,83.7004693 643.066904,83.7004693 C640.637494,83.7004693 638.633231,82.3550296 637.800291,78.224444 C636.733086,72.928382 637.626762,61.5992655 636.585586,58.8483983 C637.244997,58.4970414 638.407643,58 639.622348,58 C641.722052,58 641.80014,59.3882881 641.956317,62.4819425 C642.147199,66.3382983 641.704699,73.2711691 642.364111,76.7161804 C642.754551,78.7729034 643.622198,79.6213018 644.79352,79.6213018 C646.424695,79.6213018 649.044987,76.6819016 650.060133,73.3568659 C651.274838,69.3976739 652.446161,61.4278719 652.428808,58.6598653 C652.966749,58.3599265 654.250865,58.1713936 655.066453,58.1713936 C656.949245,58.1713936 657.278951,59.2254642 657.192186,60.7851459 C657.00998,64.178739 654.381012,79.6727198 652.793219,86.3656397 C658.01645,86.9398083 662.337329,88.5937563 665.530267,90.4190981 C666.640855,91.0532545 667.039972,91.7302591 667.039972,92.5872271 C667.031295,93.6412977 665.920708,95.2866762 664.697327,96.040808 L664.697327,96.040808 L664.697327,96.040808 L664.697327,96.040808 Z M638.615878,94.5325444 C638.615878,96.1693532 639.457495,97.3605386 641.340288,97.3605386 C643.847786,97.3605386 645.565725,94.3782901 647.257636,89.0393797 C643.379257,89.2536217 638.615878,91.3789023 638.615878,94.5325444 L638.615878,94.5325444 L638.615878,94.5325444 L638.615878,94.5325444 Z M698.674357,83.3662518 C698.752445,84.617425 699.012739,86.2885125 699.585385,87.1540503 C699.012739,87.8310549 697.763328,88.4309325 696.435829,88.4309325 C694.917448,88.4309325 694.466272,87.2997347 694.336125,85.474393 C694.136567,82.7406652 695.429359,71.9171598 695.385977,69.7576005 C695.377301,69.1577229 695.325242,68.7463783 694.891419,68.7463783 C693.937008,68.7463783 691.57701,71.7200571 690.891569,73.8967558 C690.128041,76.3305448 689.494659,82.7920832 689.798335,85.3544175 C688.887306,85.7571925 687.568484,86.0057131 686.735543,86.0057131 C685.746427,86.0057131 685.269221,85.5515201 685.269221,84.163232 C685.269221,81.9094062 686.562014,71.7543359 686.562014,69.7318915 C686.562014,69.3976739 686.483926,68.8320751 686.067456,68.8320751 C685.234515,68.8320751 682.458047,72.5513161 681.807312,74.7708631 C681.165254,76.9904102 680.913637,82.6806774 680.792166,84.1118139 C680.705401,85.1830239 680.549225,85.5857989 679.863785,85.8343195 C679.343197,86.0228525 677.772757,86.2542339 676.861728,86.2370945 C676.210993,86.2199551 676.124229,85.6029382 676.176288,85.0373393 C676.202317,84.7631096 676.254376,84.2403591 676.306435,83.5547847 C675.2132,84.6688431 673.243643,86.1599673 671.707909,86.1599673 C669.313205,86.1599673 668.150559,84.0518262 668.358794,80.5982452 C667.057325,83.4091002 664.463062,86.1085493 661.695271,86.1085493 C659.265861,86.1085493 658.484979,84.377474 658.389538,81.7894308 C658.285421,79.1242604 659.630272,67.5294838 659.187773,65.5755968 C659.873213,65.3356458 660.784242,65.1128341 661.703947,65.1128341 C662.823211,65.1128341 663.881739,65.6098755 663.864386,67.015303 C663.847033,68.4207305 662.719093,78.0016324 662.788505,80.7610692 C662.814534,81.8151398 662.87527,82.586411 663.682181,82.586411 C664.98365,82.586411 667.308942,79.0299938 668.037765,76.8704346 C668.723206,74.8479902 669.530117,68.0522342 669.148353,65.7898388 C670.180852,65.4899 670.770851,65.3870639 671.838056,65.3870639 C672.905261,65.3870639 673.755554,65.8841053 673.746878,67.4952051 C673.720849,70.2289329 672.879232,78.5843706 672.861879,80.6496634 C672.853202,82.0379514 672.992026,82.7149561 673.755554,82.7149561 C674.475701,82.7149561 675.690406,81.6008978 676.566729,80.4611304 C676.714228,78.6357886 676.870405,76.621914 676.974522,75.12222 C677.165404,72.3799225 677.581875,67.4866354 677.312904,65.9098143 C678.336727,65.4984697 678.874668,65.4556213 679.594814,65.4556213 C680.314961,65.4556213 681.529666,65.8326872 681.798636,66.8867578 C682.024224,67.7865742 681.76393,69.3291165 681.64246,70.760253 C682.666282,68.6178331 686.319073,64.7443379 688.635689,64.7443379 C690.804805,64.7443379 691.221275,66.9210365 690.995687,69.7061824 C692.592156,67.2209753 695.143036,64.821465 697.39024,64.821465 C699.368474,64.821465 699.923767,66.2868802 699.923767,67.9065497 C699.923767,70.1775148 698.474798,80.0583554 698.674357,83.3662518 L698.674357,83.3662518 L698.674357,83.3662518 L698.674357,83.3662518 Z M741.119615,89.6478269 C739.809469,93.5813099 737.241236,96.1265048 732.781534,96.1265048 C730.022418,96.1265048 726.621245,94.5496837 726.621245,91.7388287 C726.621245,90.5819221 727.228597,89.5621301 728.443302,88.9536829 C729.050654,90.4362375 730.8033,92.1587431 733.23271,92.1587431 C736.833442,92.1587431 737.918,86.2970823 738.429911,81.592328 C737.215206,83.4690879 734.464768,86.4513365 731.896534,86.4513365 C730.282712,86.4513365 729.215507,85.6543563 728.720949,84.0346868 C727.402126,85.3201387 725.337128,86.7341359 723.376248,86.7341359 C720.981544,86.7341359 720.408897,84.6688431 720.408897,82.183636 C720.408897,79.6984288 721.241838,71.2830035 721.363308,70.0403999 C721.441396,69.2177107 721.250514,68.8406448 720.903456,68.8406448 C719.992427,68.8406448 718.092281,71.3258519 717.103165,73.7682106 C716.200812,75.9877576 715.203019,81.5494796 715.662872,85.2344419 C714.942725,85.6115079 713.797432,85.9114467 712.62611,85.9114467 C711.446111,85.9114467 711.107729,85.2001633 711.107729,83.8461538 C711.107729,79.8955316 712.287728,71.5915119 712.287728,69.5947766 C712.287728,69.0034687 712.261698,68.5149969 711.827875,68.5149969 C710.968905,68.5149969 708.218466,71.6943481 707.611114,74.1452765 C707.003761,76.5876352 706.283615,83.2119976 706.101409,84.4803101 C705.997292,85.2087329 705.92788,85.7314834 705.086263,85.9371557 C704.366117,86.1085493 702.908471,86.1856765 702.396559,86.0914099 C701.936707,85.9971435 701.641707,85.6543563 701.737148,84.5660069 C702.058177,81.0695776 702.925824,72.954091 703.082,70.091818 C703.151412,68.7120996 703.160088,67.1952663 702.891118,65.6184452 C703.654647,65.3956335 704.522293,65.2413793 705.285822,65.2413793 C707.524349,65.2413793 708.018908,67.3238115 707.79332,69.7747399 C709.19023,67.0667211 712.148904,64.6329321 714.430814,64.6329321 C716.712724,64.6329321 716.799488,67.8637013 716.5739,70.5374413 C718.014193,67.7780045 720.964191,64.5215262 723.515071,64.5215262 C725.337128,64.5215262 725.909775,65.6527239 725.909775,67.6751683 C725.909775,70.4174658 724.660364,77.7102632 724.660364,81.061008 C724.660364,82.6035502 724.877276,83.3576821 725.753599,83.3576821 C726.404333,83.3576821 727.514921,82.4835748 728.408596,81.5066312 C728.417273,77.4360334 729.900948,68.5149969 729.284919,65.6355846 C729.866242,65.3613548 730.829329,65.1556825 731.592858,65.1556825 C732.885651,65.1556825 733.935503,65.8583963 734.022268,67.5637625 C734.152415,69.9461334 732.66874,78.8757396 732.868298,81.138135 C732.963739,82.209345 733.20668,82.6806774 733.822709,82.6806774 C735.228296,82.6806774 737.232559,80.1611916 738.048147,78.0787594 C738.855058,75.9963274 739.705351,69.0977352 739.427704,66.0126505 C740.217263,65.6870027 740.972115,65.4899 741.657555,65.4899 C743.080495,65.4899 743.861377,66.3640073 743.861377,67.6494593 C743.861377,73.2368904 742.108732,86.6741481 741.119615,89.6478269 L741.119615,89.6478269 L741.119615,89.6478269 L741.119615,89.6478269 Z M804.54456,85.0202 C804.91765,86.6312997 805.785295,87.5054071 807,88.1567027 C806.236471,89.1079371 804.587943,90.1362987 802.982798,89.6992451 C801.707357,89.3478881 800.718241,88.3366659 800.371182,86.7512753 C799.173831,81.2066924 801.759415,72.1656805 801.403682,69.5347888 C801.325593,68.9349112 801.073976,68.7720873 800.640153,68.7720873 C799.685741,68.7720873 797.221625,71.6857784 796.544862,73.8710467 C795.737951,76.4762294 795.078539,82.5435626 795.408245,85.2515813 C794.540599,85.6800653 793.273835,85.9800041 792.345454,85.9028769 C791.356337,85.8257499 790.896484,85.4486839 790.879131,84.0603958 C790.835749,80.9667414 792.163248,71.7800449 792.163248,69.7490308 C792.163248,69.4148133 792.08516,68.8492144 791.66869,68.8492144 C790.835749,68.8492144 788.059281,72.5684554 787.408546,74.7880024 C786.766488,77.0075494 786.523547,82.5692716 786.402076,84.0004081 C786.315312,85.0716181 786.159135,85.474393 785.473695,85.7229137 C784.953107,85.9114467 783.382667,86.1428281 782.471638,86.1256887 C781.820904,86.1085493 781.734139,85.4915323 781.786198,84.9259335 C781.812227,84.6431341 781.864286,84.1032442 781.925021,83.4005305 C780.710316,84.6088553 778.792818,86.0142829 777.239731,86.0142829 C774.810322,86.0142829 773.899293,83.4690879 774.00341,79.964089 C773.014294,82.5692716 770.550178,86.0399919 767.513416,86.0399919 C764.953859,86.0399919 764.233713,84.0004081 764.112242,81.6437462 C763.982095,79.1413998 764.875771,70.9059376 764.875771,69.6547643 C764.875771,68.1293614 764.797683,66.9296062 763.392096,66.9296062 C762.628567,66.9296062 761.544009,67.5980412 760.728422,68.2750459 C761.682833,69.8861457 762.220773,71.9000204 762.186067,74.1367068 C762.099303,79.4841868 758.004012,84.3089165 753.041075,84.3089165 C751.635488,84.3089165 750.394754,84.0004081 749.353578,83.4348092 C749.00652,83.7947358 748.694167,84.2403591 748.694167,84.6774128 C748.685491,85.9542951 751.895782,86.5798817 755.175485,87.3682923 C758.715482,88.2166905 761.752244,89.3221791 761.726215,93.2556621 C761.700186,97.163436 757.509454,100 752.572546,100 C748.060785,100 743.496966,98.3374822 743.522995,94.6096715 C743.540348,92.2530095 745.587993,90.4362375 747.453433,89.4678637 C746.004464,88.7223015 745.188876,87.7196491 745.197552,86.0314221 C745.206229,84.2832075 746.446963,82.8863497 747.566227,81.969394 C746.247405,80.443991 745.544611,78.224444 745.579317,75.4992858 C745.648729,69.9032851 749.101961,64.5129565 754.455339,64.5129565 C756.277396,64.5129565 757.891218,65.1899612 759.175335,66.3554377 C760.763128,64.9757192 763.053714,63.8959396 764.832389,63.8959396 C767.912533,63.8959396 769.257385,65.892675 769.205326,69.2262803 C769.161944,72.2342379 768.224886,79.1156906 768.372386,80.9410324 C768.433121,81.6180372 768.676062,82.2693328 769.439591,82.2693328 C770.506796,82.2693328 771.790912,79.964089 772.858117,77.7102632 C774.44591,74.3509488 775.001204,68.0008162 774.680175,65.7298511 C775.539144,65.4813303 776.250614,65.3013671 777.083555,65.3013671 C778.549877,65.3013671 779.40017,66.1754744 779.40017,67.7351561 C779.40017,69.6119159 778.27223,78.7386248 778.44576,80.9324628 C778.523848,81.943685 778.645318,82.397878 779.304729,82.397878 C780.085611,82.397878 781.352375,81.2238318 782.167962,80.2640278 C782.306786,78.5158132 782.454286,76.6133442 782.558403,75.147929 C782.749285,72.4056315 783.165756,67.5209141 782.896785,65.9355234 C783.920608,65.5241787 784.458548,65.4813303 785.178695,65.4813303 C785.898841,65.4813303 787.113546,65.8583963 787.382517,66.9124668 C787.608105,67.8122832 787.460605,69.2691287 787.347811,70.7002653 C788.371634,68.5578453 791.911631,64.7700469 794.228246,64.7700469 C796.397362,64.7700469 796.813832,66.9467456 796.588244,69.7318915 C798.184713,67.2466843 800.89177,64.847174 803.130297,64.847174 C805.108531,64.847174 805.84603,66.0640686 806.036912,67.8379923 C806.383971,70.8973679 803.460004,80.3840032 804.54456,85.0202 L804.54456,85.0202 L804.54456,85.0202 L804.54456,85.0202 Z M752.589899,97.540502 C755.375044,97.540502 757.10166,96.280759 757.110337,94.3268721 C757.127689,92.3729851 755.609308,91.9102223 751.5574,90.8561517 C750.950048,90.7018975 750.386078,90.5476433 749.856813,90.3848195 C748.494608,91.5760049 747.826521,92.8443175 747.817844,94.3183024 C747.800492,96.5978372 750.229901,97.540502 752.589899,97.540502 L752.589899,97.540502 L752.589899,97.540502 L752.589899,97.540502 Z M754.429309,66.9810243 C752.1474,66.9810243 750.472842,71.617221 750.412107,75.2421955 C750.360048,78.7129158 751.227694,81.6180372 753.24931,81.6180372 C755.67872,81.6180372 757.361954,77.4960212 757.405336,74.3680882 C757.457395,71.1116099 756.780631,66.9810243 754.429309,66.9810243 L754.429309,66.9810243 L754.429309,66.9810243 L754.429309,66.9810243 Z"
          transform="translate(-634 -58)"
        ></path>
      </svg>
      <h2 className="rightheader">Thanks! 📬</h2>
      <p>
        Your message is sent to Leon &amp; Vince and we will contact you soon.
      </p>
      <Link to="/Contact">
        <button className="btn" type="button" onClick={props.close}>
          Back To The Bet Mobile
        </button>
      </Link>
    </div>
  );
}