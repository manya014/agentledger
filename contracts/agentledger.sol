// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AgentLedger {

    struct Execution {
        string executionId;
        string auditHash;
        uint256 confidence;
        uint256 timestamp;
    }

    Execution[] public executions;

    function storeExecution(
        string memory executionId,
        string memory auditHash,
        uint256 confidence
    ) public {

        executions.push(
            Execution(
                executionId,
                auditHash,
                confidence,
                block.timestamp
            )
        );
    }

    function getExecution(
        uint256 index
    )
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256
        )
    {
        Execution memory e = executions[index];

        return (
            e.executionId,
            e.auditHash,
            e.confidence,
            e.timestamp
        );
    }
}