import groupBy from "lodash/groupBy";
import chunk from "lodash/chunk";

export const buildRows = fields => {
  const rows = [];
  fields = fields.map((field, i) => {
    return field.flexConfig
      ? field.flexConfig.row
        ? field
        : {
            ...field,
            flexConfig: {
              ...field.flexConfig,
              row: i
            }
          }
      : { ...field, flexConfig: { row: i } };
  });
  const fieldsGroups = groupBy(fields, field => field.flexConfig.row);
  Object.keys(fieldsGroups).forEach(group => {
    rows.push(fieldsGroups[group]);
  });
  return rows;
};

export const buildRowsByColumns = (fields, columns) => {
  const flex = Math.floor(12 / columns);
  fields.map(fieldItem => {
    if (!fieldItem.flexConfig) fieldItem.flexConfig = {};
    fieldItem.flexConfig.flex = flex;
    return fieldItem;
  });
  return chunk(fields, columns);
};

export const buildColumns = (mainGroups, columns) => {
  let mainGroupsFormatted = [];
  mainGroupsFormatted = mainGroups.map(group => {
    if (group.fields.length === 1) {
      if (!group.fields[0].flexConfig) group.fields[0].flexConfig = {};
      group.fields[0].flexConfig.flex = 12;
      group.fields = [group.fields];
    } else {
      group.fields = columns
        ? buildRowsByColumns(group.fields, columns)
        : buildRows(group.fields);
    }
    return group;
  });
  return mainGroupsFormatted;
};
