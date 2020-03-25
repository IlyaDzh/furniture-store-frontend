import React from "react";

import { ScrollToTop, Section } from "components";
import { CommentsAll } from "./containers";

const Comments = () => (
    <Section className="comments" title="Отзывы наших клиентов">
        <ScrollToTop />
        <CommentsAll />
    </Section>
);

export default Comments;
