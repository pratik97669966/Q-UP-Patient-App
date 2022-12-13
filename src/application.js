// import Moment from "moment";

// export function secondsFromMidNight(epoch) {
//   return Moment(+epoch)
//     .seconds(0)
//     .diff(Moment().startOf("day"), "seconds");
// }

// export function dateFromSeconds(
//   seconds = secondsFromMidNight(new Date().getTime())
// ) {
//   var now = new Date();
//   var baseTime = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate(),
//     0,
//     0,
//     0
//   );
//   return Math.round((baseTime.getTime() / 1000 + seconds) * 1000);
// }

// export const getMomentObjFromSeconds = (secondsFromMidnight) =>
//   secondsFromMidnight
//     ? Moment().startOf("day").seconds(secondsFromMidnight)
//     : null;

// export function getFormattedDateTimeFromSeconds({
//   secondsFromMidnight,
//   format = "hh:mm A",
// }) {
//   return Moment()
//     .startOf("day")
//     .seconds(+secondsFromMidnight)
//     .format(format);
// }

// export function getFormattedDateTimeFromEpoch({ epoch, format = "hh:mm A" }) {
//   return Moment(epoch).format(format);
// }

// export function getUTCDateFromMidNight() {
//   return Moment().startOf("day").utc().format();
// }
// export function getUTCDate() {
//   return Moment().utc().format();
// }
