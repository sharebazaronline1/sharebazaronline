export const buildSearchIndex = (ipos = [], preIpos = [], brokers = [], blogs = [], unlistedShares = []) => {
  const ipoIndex = ipos.map((ipo) => ({
    id: `ipo-${ipo.id}`,
    title: ipo.name,
    content: `
      ${ipo.fullName || ""}
      IPO
      Price ${ipo.price || ""}
      Lot size ${ipo.lot || ""}
      Depository ${ipo.depository || ""}
      Status ${ipo.status || ""}
      ${ipo.type || ""}
    `,
    url: `/ipo/${ipo.id}`,
  }));

  const preIpoIndex = preIpos.map((pre) => ({
    id: `preipo-${pre.id}`,
    title: pre.name,
    content: `
      Pre IPO
      Unlisted Shares
      Price ${pre.price || ""}
      Lot size ${pre.minLotSize || ""}
      Depository ${pre.depository || ""}
    `,
    url: `/pre-ipo-stocks`,
  }));

  const brokerIndex = brokers.map((b) => ({
    id: `broker-${b.id}`,
    title: b.name,
    content: `Rating: ${b.rating}, Brokerage: ${b.brokerage}, Equities: ${b.equities}`,
    url: `/brokers`,
  }));

  const blogIndex = blogs.map((b) => ({
    id: `blog-${b.id}`,
    title: b.title,
    content: b.content,
    url: `/insight-hub`,
  }));


  const unlistedIndex = unlistedShares.map((u) => ({
    id: `unlisted-${u.id}`,
    title: u.name,
    content: `Price: ${u.price}`,
    url: `/pre-ipo-stocks`,
  }));

  return [
    ...ipoIndex,
    ...preIpoIndex,
    ...brokerIndex,
    ...blogIndex,
    ...unlistedIndex,
  ];
};
