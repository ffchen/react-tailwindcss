import moment from "moment";

export const timeFormat = (val) => moment(val).format("YYYY-MM-DD hh:mm:ss");
