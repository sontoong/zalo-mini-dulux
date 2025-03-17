function flattenConstruction(items: any, result: any[] = []) {
  for (const item of items) {
    result.push({
      name: item.name,
      code: item.code,
    });

    if (item.children && item.children.length > 0) {
      flattenConstruction(item.children, result);
    }
  }

  return result;
}

export { flattenConstruction };
