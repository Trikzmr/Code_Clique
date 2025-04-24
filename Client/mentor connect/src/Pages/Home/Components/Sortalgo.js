export const sortbyuser = (data, user) => {
  data = settingpoints(data);
  //assignpointswithskill(data,user);
  data = pointbyviews(data, user);
  data = pointbydate(data);
  data = sortbypoints(data);

  console.log(data);
  return data;
};

const settingpoints = (data) => {
  for (let i = 0; i < data.length; i++) {
    data[i].point = 1000;
  }
  return data;
};
const pointbyviews = (data, user) => {
  //save the top 3 frequcy of elements present in user.views

  let freq = {};
  for (let i = 0; i < user.views.length; i++) {
    freq[user.views[i]] = (freq[user.views[i]] || 0) + 1;
  }
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  let top3 = sorted.slice(0, 3).map((item) => item[0]);

  //add point to data if category matches to top 3 if rank 1 50 point rank 2 30point rank 3 15 point
  let rank = [50, 30, 15];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < top3.length; j++) {
      if (data[i].Category === top3[j]) {
        data[i].point += rank[j];
      }
    }
  }
  return data;
};

const sortbypoints = (data) => {
  data.sort((a, b) => b.point - a.point);
  return data;
};

const pointbydate = (data) => {
  for (let i = 0; i < data.length; i++) {
    const createdAt = new Date(data[i].createdAt);
    const today = new Date();

    // Reset time components for accurate "date-only" comparison
    createdAt.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diff = today - createdAt; // Difference in milliseconds
    const diffDays = diff / (1000 * 60 * 60 * 24);
    data[i].point -= diffDays*0.6;
  }

  return data;
};
