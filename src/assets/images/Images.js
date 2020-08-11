export const imagesAssets = {
    adikaLogo:require('../images/adika-logo.png')
}

export function getImage(imageName) {
    return imagesAssets[imageName];
}