import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ratio = 0.8;

export const bgImageHeight = (width: number) => {
	if (width >= 900) return { height: hp('86%') };
	if (width >= 800) return { height: hp('84.5%') };
	if (width >= 700) return { height: hp('81%') };
	if (width >= 480) return { height: hp('82%') };
	return {};
};

export const imgHeightProductsOrder = (width: number) => {
	if (width >= 600) return { height: wp('30%') };
	return {};
};

export const categoryImage = (category: string) => {
	switch (category) {
		case 'men':
			return 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/jebito3kfluzbmxvaee9.jpg';
		case 'girls':
			return 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/tiqecaixusjejkwizmyi.jpg';
		case 'boys':
			return 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667963127/sportika/wk1hb8kuvrxyfnnghslw.jpg';
		default:
			return 'https://res.cloudinary.com/dlz1bhh8j/image/upload/v1667941749/sportika/aifz1e34oa15abjvibjo.jpg';
	}
};

export const catImgHeight = (width: number) => {
	if (width >= 480) return { height: wp('55%') };
	return {};
};

export const imgCarouselProduct = (width: number) => {
	if (width >= 480) return wp('70%');
	return wp('100%');
};

export const responsiveFontSize = (size: number, width: number) => {
	if (width >= 480) return { fontSize: size * (width / 390) * ratio };
	return {};
};

export const responsiveInputHeight = (height: number, width: number) => {
	if (width >= 480) return { height: height * (width / 390) * ratio };
	return {};
};

export const responsiveIconContainer = (h: number, w: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390) * ratio, height: h * (width / 390) * ratio };
	return {};
};

export const responsiveIcon = (size: number, width: number) => {
	if (width >= 480) return size * (width / 390) * ratio;
	return size;
};

export const searchIcon = (width: number) => {
	if (width >= 900) return 42;
	if (width >= 800) return 40;
	if (width >= 700) return 38;
	if (width >= 480) return 35;
	return 24;
};

export const headerIconsContainer = (w: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390) };
	return {};
};

export const logoHeader = (w: number, h: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390) * ratio, height: h * (width / 390) * ratio };
	return {};
};

export const googleBtnCont = (h: number, width: number) => {
	if (width >= 480) return { height: h * (width / 390) * ratio };
	return {};
};

export const tabBarHeight = (width: number) => {
	if (width >= 900) return 85;
	if (width >= 800) return 75;
	if (width >= 700) return 70;
	if (width >= 600) return 65;
	if (width >= 480) return 60;
	return 50;
};

export const inputPadding = (width: number) => {
	if (width >= 900) return { paddingLeft: 62 };
	if (width >= 800) return { paddingLeft: 57 };
	if (width >= 700) return { paddingLeft: 52 };
	if (width >= 600) return { paddingLeft: 45 };
	return {};
};
