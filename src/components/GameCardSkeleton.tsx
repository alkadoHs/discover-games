import { Card, CardBody, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={200} rounded={10} overflow={"hidden"} />
      <CardBody>
        <Skeleton />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
