<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('presence-mc-chat-conversation.{conversationId}', function ($user) {
    return ['id' => $user->id, 'name' => $user->name];
});
