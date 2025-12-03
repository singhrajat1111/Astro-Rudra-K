const swisseph = require('../ephemeris/ephe');

const setAyanamsa = (ayanamsaId = swisseph.SE_SIDM_LAHIRI) => {
    swisseph.swe_set_sid_mode(ayanamsaId, 0, 0);
};

const getAyanamsaVal = (jd) => {
    return swisseph.swe_get_ayanamsa_ut(jd);
};

module.exports = { setAyanamsa, getAyanamsaVal };
