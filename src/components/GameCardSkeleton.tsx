import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={200} rounded={10} overflow={"hidden"} />
      <CardBody>
        <SkeletonText mt="1" noOfLines={2} spacing={2} skeletonHeight={2} />
        <HStack py={1}>
          <SkeletonCircle size="7" />
          <SkeletonCircle size="7" />
          <SkeletonCircle size="7" />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
