import { Link } from "@chakra-ui/next-js";

export function MenuLink() {
    return (
        <Link href='/about' color='yellow.700' _hover={{ color: 'blue.500' }}>
            About
        </Link>
    );
};