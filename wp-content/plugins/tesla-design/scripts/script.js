var $j = jQuery.noConflict();
var plugindir = '/wp-content/plugins/tesla-design/';
var t_d_q1 = 1; //Вид
var t_d_q2 = 5; //Цвет
var t_d_q3 = 1; //Фары
var t_d_q4 = 1; //Крыша
var t_d_q5 = 1; //Диски
var t_d_q6 = 1; //Тормоза

function tesla_design(){
  logout("hello World!");
}

function logout(text) {
  $j('#log').append(text+'</br>');
}

function tesla_design_edit(q1,q2,q3,q4,q5,q6) {

  if(q1){ //discs color
    switch (q1) {
      case 1:
        $j('#t_d_1').attr("src",plugindir+"image/1/ms_mi01_stud_3qtr_bkba.jpg");
        t_d_q1 = 1;
        $j('#t_d_3').attr("src",plugindir+"image/1/lights/ms_mi01_stud_3qtr_fg02.png");
        $j('#t_d_4').attr("src",plugindir+"image/1/roof/ms_mi01_stud_3qtr_rffg.png");
      break;
      case 2:
        $j('#t_d_1').attr("src",plugindir+"image/2/ms_mi01_stud_side_bkba.jpg");
        t_d_q1 = 2;
        $j('#t_d_3').attr("src",plugindir+"image/2/lights/ms_mi01_stud_side_fg02.png");
        $j('#t_d_4').attr("src",plugindir+"image/2/roof/ms_mi01_stud_side_rffg.png");
      break;


      default:
        $j('#t_d_5').attr("src",plugindir+"image/1/ms_mi01_stud_3qtr_bkba.jpg");
        t_d_q1 = 1;
      }
      t_d_edit_q2(t_d_q1,t_d_q2);
      t_d_edit_q5(t_d_q1,t_d_q5);
  }

  if(q2)t_d_edit_q2(t_d_q1,q2);
  if(q5)t_d_edit_q5(t_d_q1,q5);
}

function t_d_edit_q2(cam,qq){
  if(qq){
    $j('.t_d_color_1_activate').toggleClass('t_d_color_1_activate t_d_color_1');
    $j('.t_d_color_2_activate').toggleClass('t_d_color_2_activate t_d_color_2');
    $j('.t_d_color_3_activate').toggleClass('t_d_color_3_activate t_d_color_3');
    $j('.t_d_color_4_activate').toggleClass('t_d_color_4_activate t_d_color_4');
    $j('.t_d_color_5_activate').toggleClass('t_d_color_5_activate t_d_color_5');
    switch (qq) {
      case 1:
        $j('.t_d_color_1').toggleClass('t_d_color_1 t_d_color_1_activate');
      break;
      case 2:
        $j('.t_d_color_2').toggleClass('t_d_color_2 t_d_color_2_activate');
      break;
      case 3:
        $j('.t_d_color_3').toggleClass('t_d_color_3 t_d_color_3_activate');
      break;
      case 4:
        $j('.t_d_color_4').toggleClass('t_d_color_4 t_d_color_4_activate');
      break;
      case 5:
        $j('.t_d_color_5').toggleClass('t_d_color_5 t_d_color_5_activate');
      break;
      default:
        $j('.t_d_color_1').toggleClass('t_d_color_1 t_d_color_1_activate');
      }
  }


  if(cam){
      switch (cam) {
        case 1:
        if(qq){ //body color
          switch (qq) {
            case 1:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_pbsb.png");
              t_d_q2 = 1;
            break;
            case 2:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_pmng.png");
              t_d_q2 = 2;
            break;
            case 3:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_ppsb.png");
              t_d_q2 = 3;
            break;
            case 4:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_ppsw.png");
              t_d_q2 = 4;
            break;
            case 5:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_ppmr.png");
              t_d_q2 = 5;
            break;
            default:
              $j('#t_d_2').attr("src",plugindir+"image/1/body/ms_mi01_stud_3qtr_pbsb.png");
              t_d_q2 = 1;
            }
          }
      break;

      case 2:
      if(qq){ //body color
        switch (qq) {
          case 1:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_pbsb.png");
            t_d_q2 = 1;
          break;
          case 2:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_pmng.png");
            t_d_q2 = 2;
          break;
          case 3:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_ppsb.png");
            t_d_q2 = 3;
          break;
          case 4:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_ppsw.png");
            t_d_q2 = 4;
          break;
          case 5:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_ppmr.png");
            t_d_q2 = 5;
          break;
          default:
            $j('#t_d_2').attr("src",plugindir+"image/2/body/ms_mi01_stud_side_pbsb.png");
            t_d_q2 = 1;
          }
        }
    break;
      }
  }
}


function t_d_edit_q5(cam,qq){

  if(qq){
    $j('.t_d_wheels_1_activate').toggleClass('t_d_wheels_1_activate t_d_wheels_1');
    $j('.t_d_wheels_2_activate').toggleClass('t_d_wheels_2_activate t_d_wheels_2');
    $j('.t_d_wheels_3_activate').toggleClass('t_d_wheels_3_activate t_d_wheels_3');
    $j('.t_d_wheels_4_activate').toggleClass('t_d_wheels_4_activate t_d_wheels_4');
    $j('.t_d_wheels_5_activate').toggleClass('t_d_wheels_5_activate t_d_wheels_5');
    switch (qq) {
      case 1:
        $j('.t_d_wheels_1').toggleClass('t_d_wheels_1 t_d_wheels_1_activate');
      break;
      case 2:
        $j('.t_d_wheels_2').toggleClass('t_d_wheels_2 t_d_wheels_2_activate');
      break;
      case 3:
        $j('.t_d_wheels_3').toggleClass('t_d_wheels_3 t_d_wheels_3_activate');
      break;
      default:
        $j('.t_d_wheels_1').toggleClass('t_d_wheels_1 t_d_wheels_1_activate');
      }
  }

  if(cam){
      switch (cam) {
        case 1:
        if(qq){ //discs color
          switch (qq) {
            case 1:
              $j('#t_d_5').attr("src",plugindir+"image/1/discs/ms_mi01_stud_3qtr_wtas.png");
              if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/1/brakes/ms_mi01_stud_3qtr_bc0r_wtds.png");
              t_d_q5 = 1;
            break;
            case 2:
              $j('#t_d_5').attr("src",plugindir+"image/1/discs/ms_mi01_stud_3qtr_wtds.png");
              if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/1/brakes/ms_mi01_stud_3qtr_bc0r_wtds.png");
              t_d_q5 = 2;
            break;
            case 3:
              $j('#t_d_5').attr("src",plugindir+"image/1/discs/ms_mi01_stud_3qtr_wttc.png");
              if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/1/brakes/ms_mi01_stud_3qtr_bc0r_sonic.png");
              t_d_q5 = 3;
            break;
            default:
              $j('#t_d_5').attr("src",plugindir+"image/1/discs/ms_mi01_stud_3qtr_wtas.png");
              if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/1/brakes/ms_mi01_stud_3qtr_bc0r_wtds.png");
              t_d_q5 = 1;
            }
        }
      break;
      case 2:
      if(qq){ //discs color
        switch (qq) {
          case 1:
            $j('#t_d_5').attr("src",plugindir+"image/2/discs/ms_mi01_stud_side_wtas.png");
            if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/2/brakes/ms_mi01_stud_side_bc0r_wtds.png");
            t_d_q5 = 1;
          break;
          case 2:
            $j('#t_d_5').attr("src",plugindir+"image/2/discs/ms_mi01_stud_side_wtds.png");
            if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/2/brakes/ms_mi01_stud_side_bc0r_wtds.png");
            t_d_q5 = 2;
          break;
          case 3:
            $j('#t_d_5').attr("src",plugindir+"image/2/discs/ms_mi01_stud_side_wttc.png");
            if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/2/brakes/ms_mi01_stud_side_bc0r_sonic.png");
            t_d_q5 = 3;
          break;
          default:
            $j('#t_d_5').attr("src",plugindir+"image/2/discs/ms_mi01_stud_side_wtas.png");
            if(t_d_q6==1)$j('#t_d_6').attr("src",plugindir+"image/2/brakes/ms_mi01_stud_side_bc0r_wtds.png");
            t_d_q5 = 1;
          }
      }
    break;
  }
}
}
