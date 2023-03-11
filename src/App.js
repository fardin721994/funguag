import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Navigation from "./main/components/heading/navigation/Navigation";
import MainPage from "./main/pages/MainPage";
import Tour from "./main/components/tour/Tour";
// import Registration from "./main/components/Registration/LogIn_Registration";
import RegistrationForm from "./main/components/Registration/formik/RegistrationForm";
import LoginForm from "./main/components/Registration/formik/LoginForm";
import NewCourse from "./courses/pages/NewCourse";
import VideoInput from "./courses/components/ImageInput";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserCourses from "./courses/pages/UserCourses";
import UpdateCourse from "./courses/pages/UpdateCourse";
import FileUpload from "./courses/components/FileUpload";
import NavBar from "./main/bootstrap/NavBar";
import { useHttpClient } from "./shared/hooks/http-hook";

import AutoCompleteSearch from "./shared/components/UIElements/AutoCompleteSearch";
import WordItem from "./courses/components/WordItem";
import CourseSection from "./courses/components/CourseSection";
import RBAutoCompleteSearch from "./shared/components/UIElements/RBAutoCompleteSearch";
import Ttest from "./shared/components/UIElements/Ttest";
import Image from "./courses/components/Image";
import CourseList from "./courses/components/CourseList";
import CourseView from "./courses/components/CourseView";
function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  let newData = [
    {
      title: "ask_verb_4",
      word: "ask",
      wordClass: "verb",
      meaningNumber: "4",
      definition: " to invite someone to your home, to go out with you etc",
    },
    {
      title: "vulnerable_adj_1",
      word: "vulnerable",
      wordClass: "adjective",
      meaningNumber: "1",
      definition: "someone who is vulnerable can be easily harmed or hurt",
    },
    {
      title: "geek_adj",
      word: "geek",
      wordClass: "adjective",
      meaningNumber: "",
      definition:
        "someone who is not popular because they wear unfashionable clothes, do not know how to behave in social situations, or do strange things",
    },
    {
      title: "figure somebody_something ↔ out_1",
      word: "figure somebody/something out",
      wordClass: "phrasal verb",
      meaningNumber: "1",
      definition:
        "to think about a problem or situation until you find the answer or understand what has happened",
    },
    {
      title: "figure_verb_2",
      word: "figure",
      wordClass: "verb",
      meaningNumber: "2",
      definition:
        "to form a particular opinion after thinking about a situation",
    },
    {
      title: "fixated_adj",
      word: "fixated",
      wordClass: "adjective",
      meaningNumber: "",
      definition: "always thinking or talking about one particular thing",
    },
    {
      title: "strip joint_noun",
      word: "strip joint",
      wordClass: "noun",
      meaningNumber: "",
      definition:
        "a place where people go to see performers who take off their clothes in a sexually exciting way",
    },
    {
      title: "decaf_adj",
      word: "decaf",
      wordClass: "adjective",
      meaningNumber: "",
      definition: "decaffeinated coffee",
    },
    {
      title: "survivor_noun_2",
      word: "survivor",
      wordClass: "noun",
      meaningNumber: "2",
      definition:
        "someone who manages to live normally in spite of many problems",
    },
    {
      title: "bridesmaid_noun",
      word: "bridesmaid",
      wordClass: "noun",
      meaningNumber: "",
      definition:
        "a girl or woman, usually unmarried, who helps a bride on her wedding day and is with her at the wedding",
    },
    {
      title: "gravy boat_noun",
      word: "gravy boat",
      wordClass: "noun",
      meaningNumber: "",
      definition: "a long jug that you pour gravy from",
    },
    {
      title: "gravy_noun_1",
      word: "gravy",
      wordClass: "noun",
      meaningNumber: "1",
      definition:
        "a sauce made from the juice that comes from meat as it cooks, mixed with flour and water",
    },
    {
      title: "turn on_verb_5",
      word: "turn on",
      wordClass: "verb",
      meaningNumber: "5",
      definition: "to make someone feel sexually excited",
    },
    {
      title: "freak out_phrasal verb",
      word: "freak out",
      wordClass: "phrasal verb",
      meaningNumber: "",
      definition:
        "to become very anxious, upset, or afraid, or make someone very anxious, upset, or afraid",
    },
    {
      title: "hit_verb_10",
      word: "hit",
      wordClass: "verb",
      meaningNumber: "10",
      definition:
        " if a fact hits you, you suddenly realize its importance and feel surprised or shocked",
    },
    {
      title: "wonder_verb_1",
      word: "wonder",
      wordClass: "verb",
      meaningNumber: "1",
      definition:
        "to think about something that you are not sure about and try to guess what is true, what will happen etc",
    },
    {
      title: "drift apart_phrasal verb",
      word: "drift apart",
      wordClass: "phrasal verb",
      meaningNumber: "",
      definition: "if people drift apart, their relationship gradually ends",
    },
    {
      title: "organ_noun_2",
      word: "organ",
      wordClass: "noun",
      meaningNumber: "2",
      definition:
        "a) (also pipe organ) a large musical instrument used especially in churches, with keys like a piano and large pipes that air passes through to produce the sound b) an electronic musical instrument that produces music similar to a pipe organ, but that does not have pipes",
    },
    {
      title: "metaphor_noun_1",
      word: "metaphor",
      wordClass: "noun",
      meaningNumber: "1",
      definition:
        "a way of describing something by referring to it as something different and suggesting that it has similar qualities to that thing",
    },
    {
      title: "establish_verb_4",
      word: "establish",
      wordClass: "verb",
      meaningNumber: "4",
      definition:
        "to make people accept that you can do something, or that you have a particular quality",
    },
    {
      title: "whisker_noun_1",
      word: "whisker",
      wordClass: "noun",
      meaningNumber: "1",
      definition:
        "one of the long stiff hairs that grow near the mouth of a cat, mouse etc",
    },
    {
      title: "kitten_noun",
      word: "kitten",
      wordClass: "noun",
      meaningNumber: "",
      definition: "a young cat",
    },
  ];
  let data5 = [
    "(just) for the hell of it &&&  -ish &&& a matter of seconds,weeks,hours etc_#2 &&& abuse_noun_1 &&& abuse_noun_3 &&& accent_verb_1 &&& achieve_1_#1 &&& achieve_1_#2 &&& acoustic_1 &&& acoustic_2 &&& act_noun_6 &&& adore &&& advance_noun_5_#1 &&& advance_noun_5_#2 &&& agree with sb &&& aim_noun_1_#1 &&& aim_noun_1_#2 &&& aim_noun_1_#3 &&& aim_noun_2_#1 &&& aim_noun_2_#2 &&& aim_noun_3_#1 &&& aim_noun_3_#2 &&& aim_verb_1_#1png &&& aim_verb_1_#2 &&& aim_verb_1_#3 &&& aim_verb_2_#2 &&& aim_verb_3_#1 &&& aim_verb_3_#2 &&& ain't &&& albino &&& alphabet soup &&& altar &&& ammunition &&& anecdote &&& annoy_#1 &&& annoy_#2 &&& annoy_#3 &&& anthropology &&& apron_1 &&& aromatherapy &&& as of _1 &&& as of _2 &&& aside from_1_#2 &&& aside from_2_#2 &&& ask_verb_4 &&& assure_1 &&& asthma &&& as_so far as I'm concerned &&& atrium_1 &&& attachment_1  &&& attachment_2  &&& attachment_4  &&& attachment_5_#1  &&& attachment_5_#2  &&& audition &&& aura &&& awful_1 &&& ",
  ];
  let data6 = [
    "awful_1_#1 &&& awful_1_#2 &&& awkward_adj_1_2_#1 &&& awkward_adj_1_2_#2 &&& bagel_1 &&& balloon_1_#1 &&& balloon_1_#2 &&& balloon_2 &&& balloon_3 &&& bam &&& Band-Aid_1 &&& Band-Aid_2 &&& bang_verb_1_6 &&& barbecue_noun_1 &&& barbecue_noun_2 &&& barbecue_verb &&& bash_verb_2 &&& be a pain in the neck,ass,arse,backside,butt _#1 &&& be a pain in the neck,ass,arse,backside,butt_#2  &&& be about to do something &&& be all over somebody &&& be beyond somebody &&& be for the best &&& be more of something than something &&& be on a roll &&& be out of order _ a  &&& be out of order _ b,c  &&& be out of your league &&& be up to somebody &&& be with you,me#1 &&& be with you,me#2 &&& beacon &&& bead_noun_1 &&& bead_noun_2 &&& beep_verb_1 &&& beep_verb_2 &&& belch_verb_1 &&& belly_1_#1 &&& belly_1_#2 &&& belly_2 &&& belt loop &&& be_get involved_#1 &&& be_get involved_#2 &&& big deal_1 &&& black out_1 &&& black out_2 &&& black out_3 &&& blob_noun_1 &&& blossom_1_#1 &&& blossom_1_#2 &&& blow somebody_something ? off &&& blow somebody's mind &&& blow_verb_6_#1 &&& blow_verb_6_#2 &&& bonehead &&& bookcase &&& border on something &&& ",
  ];
  let data7 = [
    "border_noun_1_#1 &&& border_noun_1_#2 &&& border_noun_2 &&& borrow_1_#1 &&& borrow_1_#2 &&& boycott &&& bra &&& bracket_3 &&& brand-new &&& break up _5 &&& break_noun_9_#1 &&& break_noun_9_#2 &&& breast_1_#2 &&& breast_2_#2 &&& breast_3_#1 &&& breast_3_#2 &&& breast_4 &&& bridesmaid &&& bring something ? up &&& brutal_1_2 &&& buck_1_#1 &&& buck_1_#2 &&& buck_1_#3 &&& Bugs Bunny &&& bump_noun_1_#1 &&& bump_noun_1_#2 &&& bump_noun_2 &&& bump_noun_3_#1 &&& bump_noun_3_#2 &&& bump_verb_1_#1 &&& bump_verb_1_#2 &&& bump_verb_1_#3 &&& bump_verb_2_#2 &&& bunch_noun_1 &&& bunny &&& burgundy _1 &&& burgundy _2 &&& burn out_1 &&& burn up _ 4 &&& burn_verb_1_a_#1 &&& burn_verb_1_a_#2 &&& burn_verb_1_b_#1 &&& burn_verb_1_b_#2 &&& burn_verb_2_#1 &&& burn_verb_2_#2 &&& burn_verb_2_#3 &&& burn_verb_3_#1 &&& burn_verb_3_#2 &&& burn_verb_3_#3 &&& burn_verb_4_#1 &&& burn_verb_4_#2 &&& burn_verb_4_#3 &&& burn_verb_5_#1 &&& burn_verb_5_#2 &&& bury_1 &&& bury_2 &&& bust_verb_1_#1 &&& bust_verb_1_#2 &&& bust_verb_2_a_#1 &&& bust_verb_2_a_#2 &&& bust_verb_2_b_#1 &&& bust_verb_2_b_#2 &&& butter_noun_1 &&& butter_verb &&& butt_1 &&& by all means! &&& cafeteria &&& call (somebody's) attention to &&& camper_1_4_5 &&& camper_2_3 &&& carcass_1 &&& ",
  ];
  let data8 = [
    "career woman &&& care_noun_1_#1 &&& care_noun_1_#2 &&& care_noun_1_#3 &&& care_noun_2_a_#1 &&& care_noun_2_a_#2 &&& care_noun_2_b_#1 &&& care_noun_2_b_#2 &&& care_noun_2_c_#2 &&& care_noun_2_c_1 &&& care_noun_3_a &&& care_noun_3_b_#1 &&& care_noun_3_b_#2 &&& care_noun_3_b_#3 &&& care_noun_4_#1 &&& care_noun_4_#2 &&& care_noun_5_#1 &&& care_noun_5_#2 &&& care_verb_1_#2 &&& care_verb_1_#3 &&& cart &&& cartoon_1 &&& cartoon_2 &&& cartoon_3 &&& carve_verb_1_#1 &&& carve_verb_1_#2 &&& carve_verb_2_#1 &&& carve_verb_2_#2 &&& carve_verb_3_#1 &&& carve_verb_3_#2 &&& casket_2 &&& casual_1_#1 &&& casual_1_#2 &&& casual_2_#1 &&& casual_2_#2 &&& catch on _ 2 &&& catch up with somebody &&& catch_12 &&& cave_in &&& cervix &&& chalk &&& chances are &&& change_noun_4_#1 &&& change_noun_4_#2 &&& chaotic  &&& character_1_#1_#1 &&& character_1_#1_#2 &&& character_1_#1_#3 &&& character_1_#2 &&& character_1_#3 &&& character_1_#4 &&& character_2_a_#1 &&& character_2_a_#2 &&& character_2_b_#2 &&& character_2_c_#1 &&& character_2_c_#2 &&& character_3_#2 &&& character_3_#3 &&& charm_1_#1 &&& charm_1_#2 &&& chase_1 &&& check out_2_#1 &&& check out_2_#2 &&& cherry vanilla ice cream &&& chew_1 &&& chip in_1_#1 &&& chip in_1_#2 &&& chip in_2_#1 &&& chip in_2_#2 &&& chip_verb_1_#1 &&& chip_verb_1_#2 &&& chip_verb_1_#3 &&& chip_verb_2_#1 &&& chip_verb_2_#2 &&& chip_verb_3_#1 &&& chip_verb_3_#2 &&& chip_verb_4 &&& choke_1_#1 &&& choke_1_#2 &&& choke_2_#1 &&& choke_2_#2 &&& choke_3 &&& ",
  ];
  let data9 = [
    "chorus &&& chubby &&& cider_1 &&& cider_2 &&& cleanse &&& clench_verb_1 &&& clench_verb_2 &&& close_adj_1_#1 &&& close_adj_1_#2 &&& close_adj_1_#3 &&& club_6 &&& co-dependent &&& coaster_1 &&& cocktail &&& coffin &&& coincidence &&& come by_2_#1 &&& come by_2_#2 &&& come close (to doing something) &&& come off _ 1_2 &&& come together &&& come up_11 &&& complain_1_#1 &&& complain_1_#2 &&& complicated &&& concept_#1 &&& concept_#2 &&& concern_verb_1 &&& constant_1 &&& consummate_verb_1 &&& convenience_2 &&& convertible_1 &&& cookie dough ice cream &&& costume_noun_1 &&& course_3_a_#1 &&& course_3_a_#2 &&& course_3_b &&& cover_verb_3_#2 &&& cowboy_1 &&& coyote &&& crack into something &&& cracker_1 &&& crack_verb_1 &&& cranberry &&& crappy &&& crappy_adj &&& crash_verb_7 &&& crease_noun_3 &&& credit_noun_2 &&& credit_verb_1 &&& crispy &&& critical_1_#1 &&& critical_1_#2 &&& critical_2_#1 &&& critical_2_#2 &&& critical_3_#1 &&& critical_3_#2 &&& critical_4_#1 &&& critical_4_#2 &&& criticize_1_#1 &&& criticize_1_#2 &&& criticize_1_#3 &&& crooked_1 &&& crush_noun_2 &&& cry for help &&& curry &&& cut out _4_6 &&& dairy_3 &&& dare_1_#1 &&& dare_1_#2 &&& dare_1_#3 &&& dare_2_#1 &&& dare_2_#2 &&& dare_3_#1 &&& dare_3_#2 &&& dare_noun_#1 &&& dare_noun_#2 &&& date_1 &&& date_4 &&& deaf_1 &&& deal with somebody_something &&& debt_1_#1 &&& debt_1_#2 &&& decaf &&& define_verb_1_#1 &&& define_verb_1_#2 &&& define_verb_2_#1 &&& define_verb_2_#2 &&& definitive _1_#1 &&& definitive _1_#2 &&& dehydrate_1 &&& dehydrate_2 &&& deja vu &&& delicate_adj_1 &&& ",
  ];
  let data10 = [
    "delicate_adj_2 &&& dent_verb &&& detergent &&& diary_1 &&& dinkle &&& dirlist.txt dirt_1_2_3 &&& disability_1_#1 &&& disability_1_#2 &&& disco_1 &&& distance_#1 &&& distance_#2 &&& distance_#3 &&& distance_#4 &&& disturbing &&& divorce_noun_1_#1 &&& divorce_noun_1_#2 &&& divorce_noun_1_#3 &&& divorce_verb_1_#1 &&& divorce_verb_1_#2 &&& doom &&& draw out _2 &&& dread_verb &&& dressy_1 &&& dressy_2 &&& drift apart &&& driven &&& dryer &&& dump_verb_3 &&& duty_1_#1 &&& duty_1_#2 &&& duty_1_#3 &&& duty_2_#1 &&& duty_2_#2 &&& duty_2_#3 &&& earring &&& either_a &&& either_b &&& either_c &&& eligible_1_#1 &&& eligible_1_#2 &&& eligible_2 &&& emphysema &&& end up &&& endearing &&& engagement_1 &&& erect_adj_1 &&& establish_verb_4 &&& eternity_1_#2 &&& eternity_2 &&& eternity_3 &&& even_adj_7 &&& ever since &&& every now and then_again &&& exclamation point &&& experiment_1_#1 &&& experiment_1_#2 &&& experiment_1_#3 &&& expose_1 &&& extend_1_2_3_4_#1 &&& extend_1_2_3_4_#2 &&& extend_1_2_3_4_#3 &&& eyelash &&& fabric softener &&& faculty_1_#1 &&& faculty_1_#2 &&& faculty_2 &&& faculty_3_#1 &&& faculty_3_#2 &&& fan out &&& fantasy_1_#1 &&& fantasy_1_#2 &&& fascinating_#1 &&& fascinating_#2 &&& favor_1 &&& feast_1_#1 &&& feast_1_#2 &&& feast_2_#1 &&& feast_2_#2 &&& feast_3_#1 &&& feast_3_#2 &&& feature_1_#1 &&& feature_1_#2 &&& feature_1_#3 &&& festival_1_#1 &&& festival_1_#2 &&& festival_2_#1 &&& festival_2_#2 &&& fetus &&& FICA &&& figure somebody_something ? out &&& figure_verb_2 &&& financial_#1 &&& financial_#2 &&& fit into something &&& fixated &&& fix_verb_6_#1 &&& fix_verb_6_#2 &&& flaw_3 &&& float_1 &&& flop_verb_1 &&& flop_verb_2 &&& ",
  ];
  let data11 = [
    "fluffy &&& fluff_verb_2 &&& fluorescent_1 &&& fluorescent_2 &&& flush_1_#1 &&& flush_1_#2 &&& flush_2_#1 &&& flush_2_#2 &&& fly_12_#1 &&& fly_12_#2 &&& fly_1_#1 &&& fly_1_#2 &&& fly_1_#3 &&& fly_2 &&& fly_3_#1 &&& fly_3_#2 &&& fly_4_#1 &&& fly_4_#2 &&& fly_7_#1 &&& fly_7_#2 &&& fly_7_#3 &&& fly_8_a_#1 &&& fly_8_a_#2 &&& fly_8_b_#1 &&& fly_8_b_#2 &&& fly_9 &&& foam finger &&& foam_1 &&& foil &&& folk_1 &&& folk_2 &&& foot_noun_3_#1 &&& foot_noun_3_#2 &&& fork_1 &&& fork_2 &&& fork_3_#1 &&& fork_3_#2 &&& fork_4 &&& fork_5 &&& freak out &&& freakish &&& frost_noun_2 &&& funeral_1_#1 &&& funeral_1_#2 &&& fuzzy_3 &&& gag_verb_1 &&& gal &&& gang up on_against somebody &&& gang_noun_1_a_#1 &&& gang_noun_1_a_#2 &&& gang_noun_1_b &&& gang_noun_2_#1 &&& gang_noun_2_#2 &&& gang_noun_3 &&& gang_noun_4 &&& gee &&& geek &&& gentle_adj_1 &&& gentle_adj_2 &&& get along_1_#1 &&& get along_1_#2 &&& get along_2_#1 &&& get along_2_#2 &&& get along_3_#2 &&& get over _2 &&& get something together &&& get to do something &&& get,find your bearings_a &&& get,find your bearings_b &&& get_23_#1 &&& get_23_#2 &&& get_have your (own) way &&& giant_adj_#1 &&& giant_adj_#2 &&& giant_noun_1 &&& giant_noun_2 &&& giant_noun_3 &&& giant_noun_4 &&& gill_1 &&& give me_it a break! &&& give up _2 &&& give up _3 &&& give up _5 &&& glacier &&& glamor &&& glamour_1_2 &&& glaze_3 &&& glow_noun_1_2 &&& go off_1 &&& go through_1 &&& go wrong &&& ",
  ];
  let data12 = [
    "golf course &&& gone_1_a_#1 &&& gone_1_a_#2 &&& gone_1_b_#1 &&& gone_1_b_#2 &&& goose_noun_1_2 &&& gorgeous_1_#1 &&& gorgeous_1_#2 &&& gorgeous_2_#1 &&& gorgeous_2_#2 &&& gotta &&& grab  &&& gravy boat &&& gravy &&& grieve &&& grill_1_#1 &&& grill_1_#2 &&& grocery &&& gross_3 &&& grown-up_adj_1_#1 &&& grown-up_adj_1_#2 &&& grown-up_adj_2 &&& grown-up_noun &&& gum_1 &&& gum_2 &&& hairline &&& hairpiece &&& ham_1_#1 &&& ham_1_#2 &&& hang out _ 1 &&& Hanukkah &&& haphazard_#1 &&& haphazard_#2 &&& have a thing about somebody_something &&& have a vague idea,feeling,recollection etc (that) &&& head_verb_1 &&& heat_noun-5 &&& heels &&& heel_1 &&& heel_2_#1 &&& heel_2_#2 &&& herd_1 &&& high-powered &&& hit on somebody_something &&& hitchhike &&& hit_10 &&& hold on  &&& hold up_2 &&& holiday_1_#1 &&& holiday_1_#2 &&& holiday_1_#3 &&& holiday_2_#1 &&& holiday_2_#2 &&& holiday_3 &&& holiday_4_a &&& homosexual_#1 &&& homosexual_#2 &&& honey_1 &&& honey_2 &&& horny_1 &&& hump_noun_4 &&& hunger strike &&& hunger_1_2 &&& impending &&& impish &&& impression_3 &&& imp_1 &&& imp_2 &&& inappropriate  &&& inch_verb &&& independent_4_a_#1 &&& independent_4_a_#2 &&& independent_4_b_#1 &&& independent_4_b_#2 &&& index finger &&& infection_1_#1 &&& infection_1_#2 &&& infection_2 &&& infectious_1_#1 &&& infectious_1_#2 &&& infectious_2 &&& infectious_3_#1 &&& infectious_3_#2 &&& infect_1_#1 &&& infect_1_#2 &&& infect_2_#1 &&& infect_2_#2 &&& infect_3_#2 &&& infect_4 &&& inflatable  &&& inflate_verb_1 &&& inflate_verb_2 &&& inflate_verb_3 &&& innate &&& insecure_1 &&& instance_1_2 &&& intestine &&& invite_1_#1 &&& invite_1_#2 &&& involve_1_#2 &&& involve_2_#2 &&& involve_3_#2 &&& in_with reference to something &&& Jack and the Beanstalk &&& jeweller &&& judgement call &&& judge_verb_1_#1 &&& ",
  ];
  let data13 = [
    "judge_verb_1_#2 &&& juice_1_#1 &&& juice_1_#2 &&& juice_2 &&& juicy_1 &&& karma_1 &&& keyhole &&& key_1_#1 &&& key_1_#2 &&& key_1_#3 &&& key_1_#4 &&& key_2_#2 &&& key_3_#1 &&& key_3_#2 &&& key_4_a &&& key_4_b &&& key_5 &&& key_6 &&& kitten &&& kitty_3 &&& knuckle &&& kook &&& laundry &&& lay the foundations,groundwork,base#1 &&& lay the foundations,groundwork,base#2 &&& lay_verb_1_2 &&& lay_verb_3 &&& lay_verb_4 &&& lead_noun_1 &&& lead_noun_2 &&& lead_noun_3 &&& lead_noun_5 &&& lead_noun_6 &&& lead_noun_7 &&& leather_1 &&& lend_1_a_#1 &&& lend_1_a_#2 &&& lend_1_b_#1 &&& lend_1_b_#2 &&& lesbian &&& let go &&& let one's guard down &&& let's roll &&& life-affirming &&& lightning_1_#1 &&& lightning_1_#2 &&& lightning_2_#2 &&& live off somebody_something &&& lizard &&& loathe_#1 &&& loathe_#2 &&& locker_1 &&& look into something &&& look out! &&& loosely &&& loose_1_#1 &&& loose_1_#2 &&& loose_2_#1 &&& loose_2_#2 &&& loose_3 &&& loose_4 &&& loose_5 &&& loose_6_#1 &&& loose_6_#2 &&& loose_7_#2 &&& loot &&& lose your bearings_a &&& lose your bearings_b &&& lousy_adj_1_#1 &&& lousy_adj_1_#2 &&& lousy_adj_2 &&& lousy_adj_3_#1 &&& lousy_adj_3_#2 &&& lump_1_#1 &&& lump_1_#2 &&& lunar_#1 &&& lunar_#2 &&& Lyme disease &&& madcap &&& maid of honor &&& mail_1_#1 &&& mail_1_#2 &&& mail_1_#3 &&& major_1_2 &&& major_adj_1_#1 &&& major_adj_1_#2 &&& major_adj_1_#3 &&& major_adj_2_#1 &&& major_adj_2_#2 &&& major_adj_2_#3 &&& major_adj_4 &&& major_noun_1 &&& major_noun_2 &&& major_noun_3 &&& make a day of it &&& make a mental note &&& make it _#1 &&& make it _#2 &&& make it _#3 &&& make-up &&& maneuver_noun_1 &&& mangle_1 &&& Mardi Gras &&& Marshmallow Peep &&& marshmallow &&& mash &&& ",
  ];
  let data14 = [
    "mastodon_mammoth  &&& mayor_1 &&& mean_adj_1 &&& memory_2_#1 &&& memory_2_#2 &&& memory_2_#3 &&& merriment_#1 &&& merriment_#2 &&& mess up_1_#1 &&& mess up_1_#2 &&& mess up_2 &&& mess up_3_#1 &&& mess up_3_#2 &&& mess up_4 &&& mess_4 &&& metaphor_1 &&& miniature golf &&& minimal &&& minion &&& mint_1_#1 &&& mint_1_#2 &&& mint_2_#1 &&& mint_2_#2 &&& minus_1 &&& Mississippi &&& mitten &&& moisturizer &&& monogamy_1 &&& Monopoly(the game) &&& moose &&& moped &&& more or less_#1 &&& more or less_#2 &&& mouthful_1_#1 &&& mouthful_1_#2 &&& move in _1_#1 &&& move in _1_#2 &&& move in _2 &&& move in _4 &&& mull_#1 &&& mull_#2 &&& museum_#1 &&& museum_#2 &&& naked_1 &&& nan &&& nausea &&& near_1_#1 &&& near_1_#2 &&& near_1_#3 &&& neat_adj_1 &&& neat_adj_2 &&& neat_adj_3 &&& neat_adj_5 &&& neat_adj_6 &&& nectarine &&& nibble_verb_1 &&& nod off &&& nursery rhyme &&& obligate_verb_1 &&& obligate_verb_2_#1 &&& obligate_verb_2_#2 &&& obligation_#1 &&& obligation_#2 &&& obsession_#1 &&& obsession_#1_2 &&& obsession_#2 &&& obsession_#3 &&& obsession_#4 &&& officially_1_#1 &&& officially_1_#2 &&& officiate &&& off_1_#1 &&& off_1_#2 &&& off_1_#3 &&& omnipotent &&& on the table &&& organ_noun_2 &&& orgasm &&& other wise _1 &&& other wise _2 &&& ottoman &&& ought to_#1 &&& ought to_#2 &&& ought to_#3 &&& ought to_#4 &&& out_adverb_7 &&& oven_1_#1 &&& oven_1_#2 &&& overcoat &&& overrated &&& over_oxford_7 &&& painkiller &&& panties &&& pantsuit &&& papier mƒch‚ &&& paranoid_1 &&& pass away &&& passion_1_#1 &&& passion_1_#2 &&& passion_2_#1 &&& passion_2_#2 &&& passion_3_#1 &&& passion_3_#2 &&& paycheque &&& payroll_1 &&& payroll_2_#1 &&& payroll_2_#2 &&& peaceful_3 &&& peacock &&& pea_1 &&& peel_verb_1 &&& peel_verb_2 &&& penis &&& perspective_2 &&& pick on somebody,something &&& pick somebody_something ? out &&& pick up on something_3 &&& pie_1_#1 &&& pie_1_#2 &&& pilgrim &&& pill_1_#1 &&& pill_1_#2 &&& pit_noun_11 &&& point_noun_5_#1 &&& point_noun_5_#2 &&& pool_noun_1 &&& pool_noun_4 &&& pop_noun_6 &&& port_1_2 &&& power tie &&& predicament &&& predictable #1 &&& predictable #2 &&& prefer_1_#1 &&& prefer_1_#2 &&& prefer_1_#3 &&& prefer_1_#4 &&& prefer_1_#5 &&& preppy_#1 &&& preppy_#2 &&& prep_verb_1 &&& presumably &&& pretzel &&& priesthood_1_#1 &&& priesthood_1_#2 &&& ",
  ];
  let data15 = [
    "priest_1 &&& pro &&& projectile_noun_1 &&& projectile_noun_2 &&& promote_verb_2 &&& pronounce_1 &&& propose_verb_1_#1 &&& propose_verb_1_#2 &&& propose_verb_1_#3 &&& propose_verb_1_#4 &&& propose_verb_2_#1 &&& propose_verb_2_#2 &&& propose_verb_2_#3 &&& propose_verb_3_#1 &&& propose_verb_3_#2 &&& propose_verb_4_#2 &&& propose_verb_5_#1 &&& propose_verb_5_#2 &&& propose_verb_6_#1 &&& propose_verb_6_#2 &&& puck &&& puff_noun_1 &&& pumpkin_1 &&& punch_1 &&& puppy_1 &&& put forth something &&& put out _1 &&& put somebody_something to sleep &&& put your heads together &&& put_verb_4 &&& pƒt‚ &&& quality_1_#1 &&& quality_1_#2 &&& quality_2_#1 &&& quality_2_#2 &&& quality_3_#1 &&& quality_3_#2 &&& quit_2 &&& rabbi &&& Raggedy Ann &&& ragged_adj_1_#1 &&& ragged_adj_1_#2 &&& ragged_adj_2 &&& ragged_adj_3 &&& rain forest &&& rambunctious &&& rat &&& reach_verb_5 &&& realize_1_#1 &&& realize_1_#2 &&& realize_1_#3 &&& realize_2_#1 &&& realize_2_#2 &&& realize_3_(somebody's worst fears were realized) &&& reassure &&& reception_noun_1_#1  &&& reception_noun_1_#2  &&& reception_noun_1_#3  &&& reception_noun_2_a_#1  &&& reception_noun_2_a_#2  &&& reception_noun_2_b_#1  &&& reception_noun_2_b_#2  &&& reception_noun_3_#1  &&& reception_noun_3_#2  &&& reception_noun_4  &&& reception_noun_5  &&& refer_1_#1 &&& refer_1_#2 &&& refer_1_#3 &&& refer_3 &&& refer_5 &&& regret_verb_1_#1 &&& regret_verb_1_#2 &&& relieve_1 &&& remarkably_#1 &&& remarkably_#2 &&& resentment_#1 &&& resentment_#2 &&& responsibility_1_#1 &&& responsibility_1_#2 &&& responsibility_1_#3 &&& responsibility_2_#1 &&& responsibility_2_#2 &&& responsibility_2_#3 &&& responsibility_3_#2 &&& responsibility_4_#1 &&& responsibility_4_#2 &&& responsibility_4_#3 &&& responsible_1_#1 &&& responsible_1_#2 &&& responsible_1_#3 &&& responsible_2_#1 &&& responsible_2_#2 &&& responsible_2_#3 &&& responsible_3_#2 &&& responsible_4_#1 &&& ",
  ];
  let data16 = [
    "responsible_4_#2 &&& retainer_3 &&& revelation &&& reverse _1_#1 &&& reverse _1_#2 &&& reverse _2_#1 &&& reverse _2_#2 &&& reverse _4 &&& ride_noun_7 &&& ridiculous &&& rip something ? apart &&& rocky road ice cream &&& roll with the punches &&& roughhouse &&& rough_adj_3 &&& row_verb &&& ruin_verb_1 &&& rum &&& run over_1 &&& salary &&& saltine &&& scratch_verb_1_#1 &&& scratch_verb_1_#2 &&& scratch_verb_2_#1 &&& scratch_verb_2_#2 &&& scratch_verb_3_#1 &&& scratch_verb_3_#2 &&& scratch_verb_4_#1 &&& scratch_verb_4_#2 &&& scratch_verb_5 &&& scratch_verb_6 &&& scrub_verb_1_#1 &&& scrub_verb_1_#2 &&& scrunchy &&& self-destructive &&& selfish &&& semen &&& service_8_#1 &&& service_8_#2 &&& set up _ 10 &&& shadow_1_#1 &&& shadow_1_#2 &&& shadow_2_#1 &&& shadow_2_#2 &&& shadow_3_#2 &&& shadow_3_#3 &&& shake somebody's hand     shake hands with somebody &&& sharpen_verb_1 &&& shave_1 &&& shell_1_2 &&& shot_noun_15_#1 &&& shot_noun_15_#2 &&& shot_noun_16 &&& shot_noun_1_#1 &&& shot_noun_1_#2 &&& shot_noun_2 &&& shot_noun_3_#1 &&& shot_noun_3_#2 &&& shot_noun_4_#1 &&& shot_noun_4_#2 &&& shot_noun_5 &&& shot_noun_6_#1 &&& shot_noun_6_#2 &&& shush &&& shut up &&& sign_noun_1_#1 &&& sign_noun_1_#2 &&& sign_noun_2_#1 &&& sign_noun_2_#2 &&& sign_verb_1_#1 &&& sign_verb_1_#2 &&& sign_verb_3_#1 &&& sign_verb_3_#2 &&& sit through something &&& skiing &&& skip_verb_4 &&& skull_1 &&& sleep with somebody &&& sleeve_1 &&& sleigh &&& slide_1_#1 &&& slide_1_#2 &&& slide_2_#1 &&& slide_2_#2 &&& slide_3 &&& slim_1_#1 &&& slim_1_#2 &&& slim_2 &&& slim_3 &&& slumber party &&& slumber_noun &&& smash_verb_1 &&& smirk_#1 &&& smirk_#2 &&& snapping turtle &&& snap_verb_1 &&& snap_verb_5 &&& snort_verb_1 &&& snuggle &&& soda_2 &&& softball &&& soften_cushion the blow &&& somebody sees the glass as half-empty_half-full &&& something sucks &&& sonogram &&& sophisticated_1 &&& sophisticated_2 &&& sour_1_#1 &&& sour_1_#2 &&& sour_2 &&& sour_3_#1 &&& sour_3_#2 &&& sour_4_#1 &&& sour_4_#2 &&& spasm_1_#1 &&& spasm_1_#2 &&& spaz &&& sperm_1 &&& sperm_2 &&& spill_1_#1 &&& spill_1_#2 &&& spit_verb_1 &&& split_verb_3_4 &&& spooky_#1 &&& spooky_#2 &&& ",
  ];
  let data17 = [
    "spot_noun_1_#1 &&& spot_noun_1_#2 &&& spot_noun_2_#1 &&& spot_noun_2_#2 &&& spot_verb_1 &&& spout_noun_1 &&& spray_noun_1_#1 &&& spray_noun_1_#2 &&& spray_noun_2 &&& spray_verb_1_#1 &&& spray_verb_1_#2 &&& spray_verb_1_#3 &&& spray_verb_2 &&& spritz  &&& squirrel &&& stalk_noun_1 &&& stand up _ adj &&& stand_verb_6 &&& statement_2 &&& stay over &&& steer_verb_5 &&& stick_verb_2 &&& stomach_1_#1 &&& stomach_1_#2 &&& stomach_2 &&& stomp &&& strew_verb_1_#1 &&& strew_verb_1_#2 &&& strike_verb_16 &&& strip joint &&& stuck_adj_1_2 &&& stuffing_1 &&& stuffing_2 &&& stuff_1 &&& stuff_2 &&& stupid_1_#1 &&& stupid_1_#2 &&& stupid_1_#3 &&& stupid_1_#4 &&& stupid_2_#1 &&& stupid_2_#2 &&& stupid_3_#2 &&& suck_verb_1_#1 &&& suck_verb_1_#2 &&& suck_verb_1_#3 &&& suck_verb_2_#1 &&& suck_verb_2_#2 &&& suck_verb_3_#1 &&& suck_verb_3_#2 &&& suck_verb_3_#3 &&& suck_verb_4_#1 &&& suck_verb_4_#2 &&& suds &&& superficial_1_#2 &&& superficial_2_#2 &&& superficial_3_#1 &&& superficial_3_#2 &&& superficial_4 &&& superficial_5_#2 &&& superficial_6 &&& suppose_6_#1 &&& suppose_6_#2 &&& supremely &&& surprise_noun_1_#1 &&& surprise_noun_1_#2 &&& surprise_noun_2_#1 &&& surprise_noun_2_#2 &&& survivor &&& swear_1_#1 &&& swear_1_#2 &&& swear_2_#2 &&& swear_2_#3 &&& swear_3_#2 &&& swear_3_#3 &&& swear_4_#2 &&& swear_5_#1 &&& swear_5_#2 &&& Sweet 'N Low &&& sweetheart_1 &&& sweetheart_2 &&& sweetheart_4 &&& sweetie_2 &&& sweetie_3 &&& syphilis_noun &&& take the lead (in doing something) &&& take your time &&& take your time_1_#1 &&& take your time_1_#2 &&& take_keep_get somebody's mind off something &&& tan_adj_2 &&& Teflon &&& Thanksgiving &&& the bottom line &&& the odds &&& the Village &&& theme park &&& think something ? through &&& throw a party &&& throw up _1 &&& thumb_1 &&& ticket_1_#1 &&& ",
  ];
  let data18 = [
    "ticket_1_#2 &&& ticket_1_#3 &&& ticket_2 &&& ticket_3 &&& ticket_4 &&& tile_noun_1_2 &&& tilt_verb_1_2 &&& time out _2 &&& tin &&& tinfoil &&& tinkle_verb_1 &&& tinkle_verb_2 &&& tip_noun_1 &&& tip_noun_2_#1 &&& tip_noun_2_#2 &&& tip_noun_3_#1 &&& tip_noun_3_#2 &&& tone_1_#1 &&& tone_1_#2 &&& tone_1_#3 &&& tone_2_#2 &&& tone_2_#3 &&& tone_3_#2 &&& tone_3_#3 &&& tough_adj_1_#1 &&& tough_adj_1_#2 &&& tough_adj_2 &&& tough_adj_3 &&& tough_adj_4 &&& tradition_1_#1 &&& tradition_1_#2 &&& trample_1_#1 &&& trample_1_#2 &&& trample_2_#1 &&& trample_2_#2 &&& trashy magazine &&& tricky_1 &&& troll_1 &&& troll_2 &&& turkey_1 &&& turkey_2 &&& turn on _ 5_6 &&& turn out_1 &&& turn_2_#1 &&& turtle &&& tweezers &&& twin &&& twirl &&& Twister(the game) &&& unattainable  &&& underdog &&& understand _2_#1 &&& understand _2_#2 &&& upbeat &&& usher_noun &&& vague_1_#1 &&& vague_1_#2 &&& vague_3 &&& valentine &&& vase &&& vegetarian &&& vestibule_1 &&& vibes_1 &&& vivid_1_#1 &&& vivid_1_#2 &&& vivid_2 &&& vivid_3 &&& vomit_noun &&& vomit_verb_#1 &&& vomit_verb_#2 &&& vomit_verb_#3 &&& vowel_2 &&& vulnerable_1 &&& waiter &&& waitress &&& warden_2 &&& watch out! &&& way _ adverb_2_3 &&& wear_2 &&& weasel &&& weep_verb_1 &&& weird  &&& well_verb &&& what's the deal &&& whatsoever &&& what's eating sb &&& whipped cream &&& whip_1 &&& whip_2_#1 &&& whip_2_#2 &&& whip_3_#1 &&& whip_3_#2 &&& whip_verb_4 &&& whisker_1 &&& widowed &&& wind up &&& windshield &&& wine &&& wipe_verb_1 &&& wish_noun_1_#2 &&& wish_noun_2 &&& wish_noun_3_#2 &&& wish_verb_1_#2 &&& wish_verb_1_#3 &&& wish_verb_1_#4 &&& wish_verb_2_#1 &&& ",
  ];
  let data19 = [
    "wish_verb_2_#2 &&& wish_verb_2_#3 &&& wish_verb_3_#2 &&& wish_verb_3_#3 &&& wish_verb_4_#2 &&& wish_verb_5_#2 &&& wish_verb_6_a_#2 &&& wish_verb_6_b_#1 &&& wish_verb_6_b_#2 &&& wish_verb_7_#2 &&& wish_verb_8_#2 &&& wish_verb_9_#2 &&& wonder_1 &&& wonder_noun_1_#1 &&& wonder_noun_1_#2 &&& wonder_noun_2 &&& wonder_noun_3 &&& work out _5_6 &&& worm_1 &&& worth_1_#1 &&& worth_1_#2 &&& wound_1 &&& wound_2 &&& wrist &&& yam_1 &&& yam_2 &&& yardstick &&& you don't say! &&& you have no idea (how,what etc) &&& you've got me (there) &&& zillion_#1 &&& zillion_#2 &&& zone_1_#1 &&& zone_1_#2 &&& zone_2 &&& zoo &&& ",
  ];
  let text5 = data5[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text6 = data6[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text7 = data7[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text8 = data8[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text9 = data9[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text10 = data10[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text11 = data11[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text12 = data12[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text13 = data13[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text14 = data14[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text15 = data15[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text16 = data16[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text17 = data17[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text18 = data18[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text19 = data19[0]
    .split("&&&")
    .map((word) => word.trim())
    .map((word) => ({
      word: word,
      description: "",
    }));
  let text = [
    ...text5,
    ...text6,
    ...text7,
    ...text8,
    ...text9,
    ...text10,
    ...text11,
    ...text12,
    ...text13,
    ...text14,
    ...text15,
    ...text16,
    ...text17,
    ...text18,
    ...text19,
  ];
  let data = [
    {
      word: "fixated",
      meaning: "always thinking or talking about one particular thing",
    },
    {
      word: "strip joint",
      meaning:
        "a place where people go to see performers who take off their clothes in a sexually exciting way",
    },
    {
      word: "decaf",
      meaning: "decaffeinated coffee",
    },
    {
      word: "bridesmaid",
      meaning:
        "a girl or woman, usually unmarried, who helps a bride on her wedding day and is with her at the wedding",
    },
    {
      word: "survivor",
      meaning:
        "someone who continues to live after an accident, war, or illness",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
    {
      word: "",
      meaning: "",
    },
  ];
  // React.useEffect(() => {
  //   (function () {
  //     const dataSave = async (data) => {
  //       try {
  //         const saveDataResponse = await sendRequest(
  //           "http://localhost:5000/api/database",
  //           "POST",
  //           JSON.stringify(data),
  //           {
  //             "Content-Type": "application/json",
  //           }
  //         );
  //         console.log("successfully saved data");
  //       } catch (err) {
  //         console.log("sth wrong happened");
  //       }
  //     };
  //     newData.forEach((element) => {
  //       dataSave(element);
  //       console.log(`${element.word} is saved.`);
  //     });
  //   })();
  // }, []);

  // console.log(data);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const logInStatusHandler = (uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  };

  const logOutStatusHandler = () => {
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <Router>
      {/* <Navigation
        logInstatus={isLoggedIn}
        logOutStatusHandler={logOutStatusHandler}
        userId={userId}
      /> */}
      <NavBar
        logInstatus={isLoggedIn}
        logOutStatusHandler={logOutStatusHandler}
        userId={userId}
      />
      <Switch>
        <Route path="/" exact>
          <MainPage />
          {/* <FileUpload /> */}
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/login" exact>
          <LoginForm logInStatusHandler={logInStatusHandler} />
        </Route>
        <Route path="/registration" exact>
          <RegistrationForm logInStatusHandler={logInStatusHandler} />
        </Route>
        <Route path="/tour" exact>
          <Tour />
        </Route>
        <Route path="/courses/all" exact>
          <CourseList />
        </Route>
        <Route path="/courses/user/:userId" exact>
          <UserCourses />
        </Route>
        <Route path="/courses/new" exact>
          {/* <NewCourse userId={userId} /> */}
          <CourseSection />
        </Route>
        <Route path="/courses/:courseId" exact>
          <UpdateCourse userId={userId} />
        </Route>
        <Route path="/course/friends" exact>
          <CourseView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
export default App;
