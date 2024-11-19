"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEntity = void 0;
class AbstractEntity {
    get id() {
        return this.props.id;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    constructor(props) {
        this.props = props;
    }
    markAsUpdated() {
        this.props.updatedAt = new Date();
    }
}
exports.AbstractEntity = AbstractEntity;
//# sourceMappingURL=abstract.entity.js.map