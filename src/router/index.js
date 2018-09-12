import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';

import Calendar from '@/components/Calendar';
import Progressions from '@/components/Progressions';
import Stretches from '@/components/Stretches';

import FrontLever from '@/components/FrontLever';
import FrontSplit from '@/components/FrontSplit';

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
      path: '/stretches/front-split',
      name: 'FrontSplit',
      component: FrontSplit,
    },
  ],
});
