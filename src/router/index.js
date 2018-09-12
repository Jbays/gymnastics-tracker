import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';

import Calendar from '@/components/Calendar';
import Progressions from '@/components/Progressions';
import Stretches from '@/components/Stretches';

import FrontLever from '@/components/FrontLever';
import StraddlePlanche from '@/components/StraddlePlanche';
import SideLever from '@/components/SideLever';
import Manna from '@/components/Manna';
import SingleLegSquat from '@/components/SingleLegSquat';
// import HollowBackPress from '@/components/HollowBackPress';
// import RopeClimb from '@/components/RopeClimb';

import FrontSplit from '@/components/FrontSplit';
// import FrontSplit from '@/components/FrontSplit';
// import FrontSplit from '@/components/FrontSplit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/progressions',
      name: 'Progressions',
      component: Progressions,
    },
    {
      path: '/stretches',
      name: 'Stretches',
      component: Stretches,
    },
    {
      path: '/progressions/front-lever',
      name: 'FrontLever',
      component: FrontLever,
    },
    {
      path: '/progressions/straddle-planche',
      name: 'StraddlePlanche',
      component: StraddlePlanche,
    },
    {
      path: '/progressions/side-lever',
      name: 'SideLever',
      component: SideLever,
    },
    {
      path: '/progressions/manna',
      name: 'Manna',
      component: Manna,
    },
    {
      path: '/progressions/single-leg-squat',
      name: 'SingleLegSquat',
      component: SingleLegSquat,
    },
    {
      path: '/stretches/front-split',
      name: 'FrontSplit',
      component: FrontSplit,
    },
  ],
});
