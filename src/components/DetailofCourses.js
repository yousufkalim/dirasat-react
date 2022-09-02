//init
import React from 'react';
import '../css/card.css';
import Grid from '@material-ui/core/Grid';
import selectivity from '../assets/icons/selectivity.png';
import cost from '../assets/icons/cost.png';
import language from '../assets/icons/language.png';
import duration from '../assets/icons/duration.png';
import proximate from '../assets/icons/proximate.png';
import { useTranslation, Trans } from 'react-i18next';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//Component
function DetailofCourses({ courses, open, setOpen, user }) {
  const { t, i18n } = useTranslation();
  console.log('courses', courses);
  return (
    <>
      {courses?.length >= 1 ? (
        courses?.map((course) => (
          <Grid
            container
            spacing={2}
            className={`${
              language == 'ar' && 'arabiccourseDetail'
            } courseDetail`}
          >
            <Grid item xs={12} sm={5}>
              <p>
                {t(course?.dcourseId?.Establishment)} -{' '}
                <span>
                  {t(course?.dcourseId?.City) +
                    ' - ' +
                    t(course?.dcourseId?.wilaya)}{' '}
                </span>
                {/* {user?.institute} */}
              </p>

              <h2> {t(course?.dcourseId?.Speciality)}</h2>
            </Grid>
            <Grid item xs={12} sm={7} className="ratingGrid">
              <div className="costRating">
                <img src={cost} alt="coût" />
                <p className="textonmobile">{t('Coût')}</p>
                <div>
                  {course?.dcourseId?.cost ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.cost[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    'N/A'
                  )}
                </div>
              </div>
              <div className="languageRating">
                <img src={language} alt="langue" />
                <p className="textonmobile">{t('Langue')}</p>
                <div>
                  {' '}
                  {course?.dcourseId?.languagestar ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.languagestar[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    'N/A'
                  )}
                </div>
              </div>
              <div>
                <img src={duration} alt="durée" />
                <p className="textonmobile">{t('Durée')}</p>
                <div>
                  {course?.dcourseId?.duration ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.dcourseId?.duration[0] >= item) {
                          return (
                            <StarIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: '12px', height: '20px' }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    'N/A'
                  )}
                </div>
              </div>
              {/* <div>
                <img src={proximate} alt="proximaté" />
                <p className="textonmobile">Proximité</p>
                <div>
                  {course?.distancerating ? (
                    <>
                      {[1, 2, 3, 4, 5].map((item) => {
                        if (course?.distancerating >= item) {
                          return (
                            <StarIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                        } else
                          return (
                            <StarBorderIcon
                              style={{ width: "12px", height: "20px" }}
                            />
                          );
                      })}
                    </>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div> */}
            </Grid>
          </Grid>
        ))
      ) : (
        <>
          <h4 style={{ width: '90%', margin: 'auto', padding: '10px' }}>
            {t(
              'Il semblerait que ta spécialité au baccalauréat soit incompatible avec tes réponses au questionnaire, je t’invite à répondre de nouveau aux questions en tenant compte de la filière de ton baccalauréat!'
            )}
          </h4>
        </>
      )}
    </>
  );
}

export default DetailofCourses;
