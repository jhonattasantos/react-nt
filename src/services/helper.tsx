type getIdProps = {
  url: string;
  entity: string;
};

export function getId({ url, entity }: getIdProps) {
  return url.split(entity)[1].split("/")[1];
}

export async function getRelationship(
  entity: string,
  arrayList: any[],
  callback: (id: string) => Promise<any>
): Promise<any> {
  const relationships = [];
  for (const url of arrayList) {
    const id = getId({ url, entity });
    let result = await callback(id);
    relationships.push(result.data);
  }
  return relationships;
}
