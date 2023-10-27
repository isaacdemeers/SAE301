<!-- command pour select tout un order -->

<!-- SELECT O.*, OS.status_name
FROM Orders AS O
JOIN OrderStatus AS OS ON O.status_id = OS.status_id
WHERE O.id = 1; -- Replace 1 with the order ID you want to retrieve -->

<?php
class Order implements JsonSerializable
{
    private int $id;
    private array $json;
    private string $status;

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function getJson(): array
    {
        return $this->json;
    }

    public function setJson(array $json): self
    {
        $this->json = $json;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        if (!in_array($status, ['pending', 'paid', 'cancelled', 'refunded'])) {
            throw new Exception('Invalid status');
        }
        $this->status = $status;
        return $this;
    }

    public function JsonSerialize()
    {
        return [
            'id' => $this->id,
            'json' => $this->json,
            'status' => $this->status
        ];
    }
}


?>