```javascript
// This code uses Tailwind's `container` class, which is responsive by default.
// This might lead to unexpected behavior if not carefully managed.

<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-gray-100 p-4">
      <!-- Content -->
    </div>
    <div class="bg-gray-100 p-4">
      <!-- Content -->
    </div>
    <div class="bg-gray-100 p-4">
      <!-- Content -->
    </div>
  </div>
</div>
```