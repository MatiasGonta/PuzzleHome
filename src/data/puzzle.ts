import { CompletedImage, Image, TypeWithKey } from '@/models';

export const puzzleCompletedImages: TypeWithKey<CompletedImage> = {
  easy: {
    levelName: 'easy',
    src: './src/assets/puzzle-completed/easypuzzle-complete.jpg',
    id: 'puzzle-easy'
  },
  medium: {
    levelName: 'medium',
    src: './src/assets/puzzle-completed/mediumpuzzle-complete.jpg',
    id: 'puzzle-medium'
  },
  hard: {
    levelName: 'hard',
    src: './src/assets/puzzle-completed/hardpuzzle-complete.jpg',
    id: 'puzzle-hard'
  }
};

export const puzzlePiecesByDifficulty: TypeWithKey<Image[]> = {
  easy: [
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005723/PuzzleHome/Easy/piece1_aqcndh.jpg`,
      id: "1"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005727/PuzzleHome/Easy/piece2_ewpyms.jpg`,
      id: "2"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005729/PuzzleHome/Easy/piece3_njn0tm.jpg`,
      id: "3"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005732/PuzzleHome/Easy/piece4_etsxu2.jpg`,
      id: "4"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005735/PuzzleHome/Easy/piece5_cawimh.jpg`,
      id: "5"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005738/PuzzleHome/Easy/piece6_x1b0sk.jpg`,
      id: "6"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005742/PuzzleHome/Easy/piece7_x7bfvr.jpg`,
      id: "7"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005750/PuzzleHome/Easy/piece8_zaqocy.jpg`,
      id: "8"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005753/PuzzleHome/Easy/piece9_c55qol.jpg`,
      id: "9"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005778/PuzzleHome/Easy/piece10_uz4tqs.jpg`,
      id: "10"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005781/PuzzleHome/Easy/piece11_lrhekk.jpg`,
      id: "11"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005784/PuzzleHome/Easy/piece12_pcoxu2.jpg`,
      id: "12"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005604/PuzzleHome/Easy/piece13_vaufuc.jpg`,
      id: "13"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005606/PuzzleHome/Easy/piece14_zivhvu.jpg`,
      id: "14"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005609/PuzzleHome/Easy/piece15_safjnl.jpg`,
      id: "15"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005611/PuzzleHome/Easy/piece16_djzjjx.jpg`,
      id: "16"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005614/PuzzleHome/Easy/piece17_ihwsqf.jpg`,
      id: "17"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005620/PuzzleHome/Easy/piece18_aj9ldb.jpg`,
      id: "18"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005631/PuzzleHome/Easy/piece19_c17srk.jpg`,
      id: "19"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005633/PuzzleHome/Easy/piece20_nejwrd.jpg`,
      id: "20"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005635/PuzzleHome/Easy/piece21_whzcxt.jpg`,
      id: "21"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005638/PuzzleHome/Easy/piece22_gfpqml.jpg`,
      id: "22"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005641/PuzzleHome/Easy/piece23_af93qm.jpg`,
      id: "23"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705005643/PuzzleHome/Easy/piece24_j97lcj.jpg`,
      id: "24"
    }
  ],
  medium: [
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006019/PuzzleHome/Medium/piece1_boltwi.jpg`,
      id: "1"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006023/PuzzleHome/Medium/piece2_rhctbk.jpg`,
      id: "2"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006026/PuzzleHome/Medium/piece3_ucvfrc.jpg`,
      id: "3"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006028/PuzzleHome/Medium/piece4_rntc0j.jpg`,
      id: "4"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006032/PuzzleHome/Medium/piece5_dwtkm4.jpg`,
      id: "5"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006035/PuzzleHome/Medium/piece6_shhdya.jpg`,
      id: "6"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006038/PuzzleHome/Medium/piece7_tjvsrl.jpg`,
      id: "7"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006040/PuzzleHome/Medium/piece8_xjvbh6.jpg`,
      id: "8"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006044/PuzzleHome/Medium/piece9_jkgie7.jpg`,
      id: "9"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006101/PuzzleHome/Medium/piece10_i3ymen.jpg`,
      id: "10"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006141/PuzzleHome/Medium/piece11_lopr9u.jpg`,
      id: "11"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006155/PuzzleHome/Medium/piece12_s5axlk.jpg`,
      id: "12"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006157/PuzzleHome/Medium/piece13_e3boh0.jpg`,
      id: "13"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006160/PuzzleHome/Medium/piece14_x48d5g.jpg`,
      id: "14"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006163/PuzzleHome/Medium/piece15_lecqgf.jpg`,
      id: "15"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006462/PuzzleHome/Medium/piece16_pbdkaz.jpg`,
      id: "16"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006465/PuzzleHome/Medium/piece17_anwpgt.jpg`,
      id: "17"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006469/PuzzleHome/Medium/piece18_oillxl.jpg`,
      id: "18"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006471/PuzzleHome/Medium/piece19_ycvpup.jpg`,
      id: "19"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006474/PuzzleHome/Medium/piece20_i4j1fi.jpg`,
      id: "20"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006009/PuzzleHome/Medium/piece21_iyyldv.jpg`,
      id: "21"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006012/PuzzleHome/Medium/piece22_xkto20.jpg`,
      id: "22"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006015/PuzzleHome/Medium/piece23_m68exs.jpg`,
      id: "23"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006018/PuzzleHome/Medium/piece24_eqsyxf.jpg`,
      id: "24"
    }
  ],
  hard: [
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006623/PuzzleHome/Hard/piece1_ag24wl.jpg`,
      id: "1"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006626/PuzzleHome/Hard/piece2_dgytky.jpg`,
      id: "2"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006629/PuzzleHome/Hard/piece3_q6lnwc.jpg`,
      id: "3"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006632/PuzzleHome/Hard/piece4_krcwa1.jpg`,
      id: "4"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006635/PuzzleHome/Hard/piece5_bpbcq1.jpg`,
      id: "5"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006638/PuzzleHome/Hard/piece6_bnjfno.jpg`,
      id: "6"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006641/PuzzleHome/Hard/piece7_lozeat.jpg`,
      id: "7"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006644/PuzzleHome/Hard/piece8_rkcyy3.jpg`,
      id: "8"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006647/PuzzleHome/Hard/piece9_geyddb.jpg`,
      id: "9"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006650/PuzzleHome/Hard/piece10_eys6dl.jpg`,
      id: "10"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006653/PuzzleHome/Hard/piece11_hlkq1p.jpg`,
      id: "11"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006656/PuzzleHome/Hard/piece12_lo9wmc.jpg`,
      id: "12"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006659/PuzzleHome/Hard/piece13_hjntxu.jpg`,
      id: "13"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006662/PuzzleHome/Hard/piece14_ljkgmk.jpg`,
      id: "14"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006665/PuzzleHome/Hard/piece15_sb8eno.jpg`,
      id: "15"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006668/PuzzleHome/Hard/piece16_vmnson.jpg`,
      id: "16"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006672/PuzzleHome/Hard/piece17_cajlg4.jpg`,
      id: "17"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006675/PuzzleHome/Hard/piece18_smelib.jpg`,
      id: "18"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006678/PuzzleHome/Hard/piece19_ovamga.jpg`,
      id: "19"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006506/PuzzleHome/Hard/piece20_vcotgv.jpg`,
      id: "20"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006520/PuzzleHome/Hard/piece21_y8acvd.jpg`,
      id: "21"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006615/PuzzleHome/Hard/piece22_gttw6m.jpg`,
      id: "22"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006618/PuzzleHome/Hard/piece23_fmxrpt.jpg`,
      id: "23"
    },
    {
      src: `https://res.cloudinary.com/daizywafg/image/upload/v1705006621/PuzzleHome/Hard/piece24_tlcmta.jpg`,
      id: "24"
    }
  ]
}