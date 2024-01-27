import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  line: {
    width: 70,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
    marginTop: 2,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    paddingBottom: 30,
  },
  buttonTab: {
    paddingHorizontal: 13,
    paddingVertical: 6,
    backgroundColor: Colors.grey,
    borderRadius: 20,
    marginLeft: 10,
  },
  wrapButtonTab: {
    flexDirection: 'row',
    width: '100%',
  },
  titleButtonTab: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.black,
  },
  iconPencil: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  buttonChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapButtonChange: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  changeTitle: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
  },
  imageItem: {
    width: '100%',
    height: 138,
  },
  name: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 15,
    ...Colors.baseShadow,
    backgroundColor: Colors.main_color,
    paddingBottom: 10,
  },
  listDiet: {
    flex: 1,
    paddingRight: 15,
    paddingTop: 14,
  },
  kcal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_kcal: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: Colors.white,
  },
  titleKcal: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.white,
  },
  heart: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.red_heart,
  },
  icon_heart: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: Colors.red_heart,
    marginLeft: 6,
  },
  star: {
    width: 12,
    height: 12,
    marginLeft: 3,
  },
  starHollow: {
    width: 12,
    height: 12,
    marginLeft: 3,
    tintColor: Colors.white,
  },
  wrapStar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
  },
  bodyItem: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  wrapImage: {
    width: '100%',
    height: 138,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: Colors.gray,
  },
  wrapItem: {
    width: '100%',
    flexDirection: 'row',
  },
  viewRight: {
    flex: 1,
  },
  empty: {
    width: 60,
    height: 2,
  },
  iconBack: {
    height: 18,
    width: 11,
    tintColor: Colors.accent_color,
    marginRight: 7,
  },
  back: {
    color: Colors.accent_color,
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
  },
  wrapButtonComplete: {
    height: 40,
    width: 141,
    backgroundColor: Colors.accent_color,
    borderRadius: 20,
    ...Colors.baseShadow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapButtonAdd: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    borderColor: Colors.accent_color,
    backgroundColor: Colors.yellow16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  iconCheck: {
    width: 15,
    height: 15,
    tintColor: Colors.main_color,
    marginRight: 8,
  },
  wrap_ic: {
    marginLeft: 15,
  },
  complete: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.main_color,
  },
  fix: {
    flex: 1,
  },
  wrap: {
    flex: 1,
  },
  wrapDelete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconDeleteCircle: {
    width: 22,
    height: 22,
  },
  delete: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
