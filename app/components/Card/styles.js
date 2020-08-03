import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
export const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textTransform: 'capitalize',
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
})
