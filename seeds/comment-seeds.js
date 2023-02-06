const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nucnc reehoncus duei vee seem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Borbi oddo odio, elemdentum eu, inteerdum eu, tinfcidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Dliquam erdat voluftpat. Jn conue.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Buisque ardcu Eibero, butrum ac, bortis vel, pibus , iam.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Ni ac abitasse latea ictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Ivamus estibulum agittis apien.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Orbi dio dio, lementum u, nterdum eu, incidunt n, eo. aecenas ulvinar obortis st.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'ed el nim it met unc iverra apibus.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Nteger incidun nt el psm. raesen landi acini era.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Orbi a psu.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Uisqu rcu iber, utru ac, oborti el, apibu at, ia.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Nne ut auri get mass empor onvallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Urabitu in iber ut ass olutpa onvalli. rbi odio dio, ementu eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'usce congu, iam id rnare mperdiet, apien urna retiumnisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'uisque ort vlutpat rat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'estibulu utru utru neque. nean auctoravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'stibulum ante ipsum rimis in aucibus orci luctus et ltrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'auris enim leo, honcus sed, estibulum sit amet, ursus id, turpis.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'uisque id usto sit amet sapien ignissim estibulum. estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'onec ut mauris eget massa empor onvallis. ulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'urabitur onvallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'um ociis atoque enatibus et agnis disarturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'orbi no qua ne ui uctus utrum.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'onec dio usto, ollicitudi ut, uscipi a, eugia et, eros. estibulum ac est lacinia nisi enenatis ristiqu.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'hasellu i apien in apien aculs ongue. ivamus etus arc, aipiscing molestie, endreri at, ulputat itae, isl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'urabitur onvallis. uis onsequat dui nec nisi olutpat leifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'orem psum olor sit amet, onsectetuer dipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'am ristique ortor eu ede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'uspendisse rnare onsequat ectus. In est risus, auctor sed, ristique in, empus sit met, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'roin eu mi. ulla ac nim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'ed ante. ivamus ortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'liquam uis urpis get elit odales celerisqu.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'onec uis orci get rci ehicula ondimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'onec ut dolor. orbi vel ectu inquam ringilla oncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'urabitur ravida isi at ibh. n hac abitasse latea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'aecenas t ass uis uge uctus incidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'ras n urus eu agna ulputate uctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'tiam vel ugue. estibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'roin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'usce osuere elis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'usce cogue, iam id nare ierdiet,apien na retium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'aecenas ristique, st et empus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'estibulum ac est acinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'onec ut dolor. orbi vel lectus in uamringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'aecenaseo odio, cndimentum id, uctus nec, lestie sed, sto. ellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'teger ac o. llentesque rices ttis dio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'isque at eros, verra eget, ngue eget, mper trum, lla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'trices, bero non mattis pulvinar, lla pede amcorper augue, uscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'roin isu. aesent lectu.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'rem ipsum dolor s amet, sectetuer ipiscing elit. oin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;