import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const bgImageHeight = (width: number) => {
	if (width >= 900) return { height: hp('90.5%') };
	if (width >= 800) return { height: hp('89%') };
	if (width >= 480) return { height: hp('86%') };
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
	if (width >= 480) return { fontSize: size * (width / 390) };
	return {};
};

export const responsiveInputHeight = (height: number, width: number) => {
	if (width >= 480) return { height: height * (width / 390) };
	return {};
};

export const responsiveIconContainer = (h: number, w: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390), height: h * (width / 390) };
	return {};
};

export const responsiveIcon = (size: number, width: number) => {
	if (width >= 480) return size * (width / 390);
	return size;
};

export const headerIconsContainer = (w: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390) };
	return {};
};

export const logoHeader = (w: number, h: number, width: number) => {
	if (width >= 480) return { width: w * (width / 390), height: h * (width / 390) };
	return {};
};
