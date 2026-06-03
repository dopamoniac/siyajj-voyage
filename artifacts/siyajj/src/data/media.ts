const b = import.meta.env.BASE_URL;
const v = (file: string) => `${b}assets/siyajj-visuals/${file}`;

export const mediaConfig = {
  heroVideo: "",
  testimonialVideo: "",
  guideVideo: "",

  heroPortal: v("hero-portal.png"),
  heroImage: v("atmosphere.png"),
  atmosphere: v("atmosphere.png"),

  makkahImage: v("makkah-moment.png"),
  madinahImage: v("madinah.png"),

  collectionEssentielle: v("collection-essentielle.png"),
  collectionConfort: v("collection-confort.png"),
  collectionPrestige: v("collection-prestige.png"),
  collectionSignature: v("collection-signature.png"),
  collectionRenaissance: v("collection-renaissance.png"),

  vipImage: v("signature-vip.png"),
  signatureVip: v("signature-vip.png"),

  offerNovembre: v("offer-novembre.png"),
  offerRamadan: v("offer-ramadan.png"),
  offerFamille: v("offer-famille.png"),
  offerSeniors: v("offer-seniors.png"),
  offerPrestige: v("offer-prestige.png"),

  guidesCover: v("guides-cover.png"),

  activitiesImage: v("activity-masterclass.png"),
  activityMasterclass: v("activity-masterclass.png"),
  activityHira: v("activity-hira.png"),
  activityZiyarat: v("activity-ziyarat.png"),

  surMesure: v("sur-mesure.png"),
};
