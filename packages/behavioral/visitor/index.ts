/**
 * 访问者模式
 * 分离 数据结构 与操作数据结构的行为算法。
 */

interface ASTNode {
    type: string,
    accept(visitor)
    getNode()
}
class ImportNode implements ASTNode {
    type: string
    constructor() {
        this.type = 'ImportExpression'
    }
    accept(v: Visitor) {
        v.visit(this)
    }
    getNode() {
        return 'This node is Import'
    }
}
class ExportNode implements ASTNode {
    type: string
    constructor() {
        this.type = 'ExportExpression'
    }
    accept(v: Visitor) {
        v.visit(this)
    }
    getNode() {
        return 'This node is Export'
    }
}


interface Visitor {
    visit(node: ASTNode)
}

class Loader implements Visitor {
    visit(node: ASTNode) {
        switch (node.type) {
            case 'ExportExpression':
                console.log('I am visiting Export')
                return node.getNode()
            case 'ImportExpression':
                console.log('I am visiting Import')
                return node.getNode()
            default:
                break;
        }
    }
}

const AST = new Set<ASTNode>()
const MyLoader = new Loader()
AST.add(new ImportNode())
AST.add(new ExportNode())
AST.add(new ExportNode())
AST.add(new ImportNode())

for (let node of AST) {
    node.accept(MyLoader)
}