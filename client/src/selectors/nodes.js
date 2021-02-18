const getVisibleNodes = (nodes, { text, sortBy }) =>
  nodes
    .filter((node) => {
      const textMatch = node.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.date < b.date ? 1 : -1;
      }
      if (sortBy === 'type') {
        return a.type < b.type ? 1 : -1;
      }
      if (sortBy === 'status') {
        return a.status < b.status ? 1 : -1;
      }
      if (sortBy === 'dataType') {
        return a.dataType < b.dataType ? 1 : -1;
      }
    });

export default getVisibleNodes;
