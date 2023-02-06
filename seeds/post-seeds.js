const { Post } = require('../models');

const postdata = [
  {
    title: 'osuere etus taeDonec  psum.',
    body: 'sfadsf safdsaffdsafddsdf dfds fda',
    user_id: 10
  },
  {
    title: 'orbi non quam nec duiM luctus rutrum.',
    body: 'fdsdf dfdsfdsafdfsfadsf safdsa fda',
    user_id: 8
  },
  {
    title: 'tibulum et, lputateDonec am neque, ve ut, ltrices vel, augue.',
    body: 'safdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 1
  },
  {
    title: 'nc puru.',
    body: 'safdfsfadsf fdsafdsdf fds afda',
    user_id: 4
  },
  {
    title: 'entesque it unc.',
    body: 'safdfsfadsf afdsafdsdf sds afda',
    user_id: 7
  },
  {
    title: ' ipsum lor sit amet, ectetuer iscing elit.',
    body: 'afdfsfadsffdsafdsdf fds da',
    user_id: 4
  },
  {
    title: 'ac itasse tea tumst.',
    body: 'afdfsfadsf fdsafdsdf fds da',
    user_id: 1
  },
  {
    title: 'rbi non uam c dui tus um.',
    body: 'fdfsfadsf fdsafdsdf ds da',
    user_id: 1
  },
  {
    title: 'Ds ac ni.',
    body: 'fdfsfadsf afdsdf sds aa',
    user_id: 9
  },
  {
    title: 'abitur at um ac llus ser erdum.',
    body: 'afdfsff dsafds sds af',
    user_id: 5
  },
  {
    title: 'ac habie ea dumst.',
    body: 'afdfsfadsf fdsafdsdf fds afda',
    user_id: 3
  },
  {
    title: 'Mor oo odio, eentum eu, irdum eu, cidunt in, po.',
    body: 'dfsfadsf fdsafdsdf ds aa',
    user_id: 10
  },
  {
    title: 'nec ibus.',
    body: 'fddfsfadsffdsafdsdf sds da',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    body: 'fdsafadsf dsaffdsdf fds da',
    user_id: 3
  },
  {
    title: 'ras mi ede, lesuada in, perdiet et, mmodo vtate, sto.',
    body: 'safdfsfa dsafdsd ds afda',
    user_id: 3
  },
  {
    title: 'stibulum an ipsum imis in ibus i s et rices cubilia rae.',
    body: 'fdfsfadsf fdsafdsdf sds af',
    user_id: 7
  },
  {
    title: ' hac tasse tea tumst.',
    body: 'ffdfsfadsf dsafdsdf fds aa',
    user_id: 6
  },
  {
    title: 'am jto.',
    body: 'fdfsfadsf dsafdsdf sdfds da',
    user_id: 4
  },
  {
    title: 'la ut erat id urisputate ntum.',
    body: 'fdfsfadsffdsafdsdf fds aa',
    user_id: 6
  },
  {
    title: 'teger pede juo, ia ege, ncidunt et, us vel, pede.',
    body: 'fdsafdfssf fdsafdsdf fds da',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;