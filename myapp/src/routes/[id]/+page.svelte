<script>
    export let data;
    const { member, id } = data;
  </script>
  
  
    <h1>{member.name}</h1>
    {#if member.profilepicture}
      <img src={member.profilepicture} width="300" alt={member.name} />
    {/if}
  </div>
  
