import Ember from 'ember';
import layout from '../templates/components/dashboard-row';

import computed from 'ember-computed';

export default Ember.Component.extend({
  layout,

  classNames: ['row'],

  width: null,

  cards: computed('width.{sm,md}', function() {
    const sm = this.get('width.sm');
    const md = this.get('width.md');
    return sm.reduce((accum, _, i) => {
      accum.push({ sm: sm[i], md: md[i] });
      return accum;
    }, [])
  })
});
