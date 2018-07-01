const dataConvert = {
    weight: {
        g_g: 1,
        g_lb: 0.0022046,
        g_kg: 0.001,
        g_oz: 0.035274,
        g_ct: 5,
        g_toz: 0.032151
    },

    length: {
        m_m: 1,
        m_km: 0.001,
        m_mi: 0.00062137,
        m_in: 39.37,
        m_yd: 1.0936
    },

    volume: {
        l_l: 1,
        l_m3: 0.001,
        l_bbl: 0.0062898,
        l_qt: 1.0567,
        'l_fl. oz': 35.195,
        'l_gal. lqd': 0.26417
    }
};


const  navSectArr = Object.keys(dataConvert);

export {dataConvert, navSectArr};