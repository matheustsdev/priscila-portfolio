import { Link, LinkProps } from "@chakra-ui/next-js";

export const AppLink: React.FC<LinkProps> = ({ ...props }) => {
    return (
        <Link {...props} textDecor="none" _hover={{ textDecor: "none" }}>
            {props.children}
        </Link>
    );
};