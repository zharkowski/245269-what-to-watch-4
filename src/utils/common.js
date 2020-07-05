import {RatingLevel} from "../constants";

export const getRatingLevel = (score) => {
  if (score < 3) {
    return RatingLevel.BAD;
  } else if (score >= 3 && score < 5) {
    return RatingLevel.NORMAL;
  } else if (score >= 5 && score < 8) {
    return RatingLevel.GOOD;
  } else if (score >= 8 && score < 10) {
    return RatingLevel.VERY_GOOD;
  } else if (score === 10) {
    return RatingLevel.AWESOME;
  } else {
    return null;
  }
};
